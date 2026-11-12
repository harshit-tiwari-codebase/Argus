# Argus 🛡️
> The hundred-eyed guardian of your APIs.  
> AI-native API Gateway with atomic rate limiting, real-time analytics,  
> and a Gemini-powered RAG copilot that explains incidents in plain English.

## 🚧 Status: In Active Development

## What is Argus?
Argus is a self-hosted, open-source API Gateway that sits between your 
clients and backend services. It enforces rate limits atomically using 
Redis Lua scripting and provides an AI copilot to debug incidents in 
plain English — no more grepping raw logs.

## Planned Features
- [ ] Atomic token-bucket rate limiting (Redis + Lua)
- [ ] Multi-tenant API key management
- [ ] Real-time traffic dashboard (React + Recharts)
- [ ] Non-blocking async telemetry pipeline
- [ ] Hybrid RAG incident copilot (Gemini + MongoDB Vector Search)
- [ ] Docker Compose one-command deployment
- [ ] k6 load test benchmarks

## Tech Stack
| Layer | Technology |
|---|---|
| Gateway | Fastify (Node.js) |
| Rate Limiting | Redis + Lua Scripts |
| Database | MongoDB |
| Dashboard | React + Vite + Tailwind CSS |
| AI Copilot | Google Gemini + RAG |
| Deployment | Docker Compose |

## Getting Started
> 🚧 Setup instructions coming soon as development progresses.
