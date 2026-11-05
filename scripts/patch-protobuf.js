const fs = require('fs');
const path = require('path');

const codegenFile = path.join(__dirname, '..', 'node_modules', '@protobufjs', 'codegen', 'index.js');

if (fs.existsSync(codegenFile)) {
  let content = fs.readFileSync(codegenFile, 'utf8');
  if (!content.includes('catch (e)')) {
    content = content.replace(
      /return Function\.apply\(null, scopeParams\)\.apply\(null, scopeValues\);[^\n]*/,
      'try { return Function.apply(null, scopeParams).apply(null, scopeValues); } catch (e) { return function() {}; }'
    );
    content = content.replace(
      /return Function\(source\)\(\);[^\n]*/,
      'try { return Function(source)(); } catch (e) { return function() {}; }'
    );
    fs.writeFileSync(codegenFile, content, 'utf8');
    console.log('[patch-protobuf] Successfully patched @protobufjs/codegen for Cloudflare Workers');
  }
}
