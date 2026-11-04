import fs from 'fs';
import path from 'path';
import { getAdminDb, isAdminConfigured } from '@/lib/firebase/admin';

export interface PricingSettings {
  mathPrice: number;
  sciencePrice: number;
  bundlePrice: number;
  discountPct: number;
  offerLabel: string;
  offerExpiry: string | null;
  freeLessonsPerChapter: number;
  mode?: string;
  currency?: string;
  updatedAt?: string;
}

export const DEFAULT_PRICING: PricingSettings = {
  mathPrice: 99900,
  sciencePrice: 99900,
  bundlePrice: 169900,
  discountPct: 0,
  offerLabel: '',
  offerExpiry: null,
  freeLessonsPerChapter: 0,
  mode: 'live',
  currency: 'INR',
};

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'payment-settings.json');

export async function getPricingSettings(): Promise<PricingSettings> {
  // 1. Try Firestore if configured
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      const doc = await db.collection('paymentSettings').doc('main').get();
      if (doc.exists) {
        const data = doc.data() as Partial<PricingSettings>;
        return {
          ...DEFAULT_PRICING,
          ...data,
          mathPrice: data.mathPrice ?? DEFAULT_PRICING.mathPrice,
          sciencePrice: data.sciencePrice ?? DEFAULT_PRICING.sciencePrice,
          bundlePrice: data.bundlePrice ?? DEFAULT_PRICING.bundlePrice,
          freeLessonsPerChapter: isNaN(Number(data.freeLessonsPerChapter))
            ? DEFAULT_PRICING.freeLessonsPerChapter
            : Number(data.freeLessonsPerChapter),
        };
      }
    } catch (e) {
      console.warn('Failed to read paymentSettings from Firestore, falling back to local file:', e);
    }
  }

  // 2. Read from local persistent file
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const raw = fs.readFileSync(SETTINGS_FILE, 'utf8');
      const data = JSON.parse(raw);
      return {
        ...DEFAULT_PRICING,
        ...data,
        mathPrice: data.mathPrice ?? DEFAULT_PRICING.mathPrice,
        sciencePrice: data.sciencePrice ?? DEFAULT_PRICING.sciencePrice,
        bundlePrice: data.bundlePrice ?? DEFAULT_PRICING.bundlePrice,
        freeLessonsPerChapter: isNaN(Number(data.freeLessonsPerChapter))
          ? DEFAULT_PRICING.freeLessonsPerChapter
          : Number(data.freeLessonsPerChapter),
      };
    }
  } catch (e) {
    console.warn('Failed to read payment-settings.json:', e);
  }

  return DEFAULT_PRICING;
}

export async function savePricingSettings(settings: Partial<PricingSettings>): Promise<PricingSettings> {
  const current = await getPricingSettings();
  const updated: PricingSettings = {
    ...current,
    ...settings,
    updatedAt: new Date().toISOString(),
  };

  // 1. Save to local persistent file
  try {
    const dir = path.dirname(SETTINGS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(updated, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to write payment-settings.json:', e);
  }

  // 2. Save to Firestore if configured
  if (isAdminConfigured()) {
    try {
      const db = getAdminDb();
      await db.collection('paymentSettings').doc('main').set(updated, { merge: true });
    } catch (e) {
      console.warn('Failed to save paymentSettings to Firestore:', e);
    }
  }

  return updated;
}
