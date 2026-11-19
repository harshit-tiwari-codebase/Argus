// ─── Argus Gateway ─── Entry Point ───────────────────────────
// This file will become the main Fastify server.
// For now, it proves our TypeScript pipeline works end-to-end.

const APP_NAME: string = "Argus";
const VERSION: string = "1.0.0";

function banner(): void {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║   🛡️  ${APP_NAME} v${VERSION}                    ║
  ║   The hundred-eyed guardian of your APIs ║
  ╚══════════════════════════════════════════╝
  `);
  console.log("✅ TypeScript pipeline is working!");
  console.log(`📦 Node.js ${process.version}`);
  console.log(`🕐 Started at ${new Date().toISOString()}`);
}

banner();
