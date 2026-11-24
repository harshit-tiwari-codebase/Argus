# Argus 🛡️
> High-performance API Gateway with atomic token-bucket rate limiting, non-blocking telemetry, and an AI incident copilot.

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Fastify](https://img.shields.io/badge/Fastify-4.x-black?logo=fastify&logoColor=white)](https://fastify.dev)
[![Redis](https://img.shields.io/badge/Redis-7.x-DC382D?logo=redis&logoColor=white)](https://redis.io)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ⚡ Overview

**Argus** is an AI-native API Gateway that sits between incoming client traffic and backend microservices. Traditional API rate limiters often suffer from race conditions in high-concurrency environments due to non-atomic check-then-set cycles. Argus solves this by executing atomic token-bucket rate limiting directly inside Redis using custom Lua scripts.

In addition to traffic enforcement, Argus captures non-blocking telemetry logs and connects to a Gemini/Ollama-powered incident copilot to analyze traffic spikes, rate-limit triggers, and 5xx surges in plain English.

---

## 🏗️ Architecture

```
                  ┌──────────────────────────────┐
                  │        Incoming Client       │
                  └──────────────┬───────────────┘
                                 │ HTTP / REST
                                 ▼
                    ┌──────────────────────────┐
                    │    Argus Proxy Core      │
                    │   (Fastify + TypeScript) │
                    └──────┬────────────┬──────┘
                           │            │
            Atomic Check   │            │ Async Telemetry
         (Redis Lua Script)│            │ (Non-blocking)
                           ▼            ▼
             ┌─────────────────┐    ┌───────────────────────────┐
             │ Redis 7 Cluster │    │ Telemetry & Timeseries DB │
             │  Token Buckets  │    └─────────────┬─────────────┘
             └─────────────────┘                  │
                                                  ▼
                                    ┌───────────────────────────┐
                                    │    AI Incident Copilot    │
                                    │   (Gemini / Ollama RAG)   │
                                    └───────────────────────────┘
```

---

## 🚀 Key Features

* **Zero Race Conditions**: Executes token bucket consumption atomically inside Redis using Lua scripts—guaranteeing thread-safe enforcement even under massive concurrency.
* **Low Latency Overhead**: Sub-5ms reverse-proxy routing built on Fastify.
* **Non-Blocking Telemetry**: Telemetry and metrics are offloaded asynchronously to ensure logging never stalls the critical HTTP request pipeline.
* **AI Incident Diagnostics**: Summarizes traffic anomalies, 429 surges, and upstream failures in plain language.
* **Docker Ready**: Self-hosted and containerized for zero-dependency local or cloud deployment.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Proxy Engine** | Fastify (Node.js) + TypeScript | Ultra-low overhead HTTP reverse proxy |
| **Rate Limiter** | Redis 7 + Lua Scripting | Atomic token bucket enforcement |
| **Telemetry Store** | MongoDB / Timeseries Logs | Metric collection & log persistence |
| **AI Copilot** | Google Gemini / Ollama | Natural language incident postmortems |
| **Containerization** | Docker & Docker Compose | Repeatable, portable deployment |

---

## 🚦 Getting Started

### Prerequisites
* [Node.js 20+](https://nodejs.org/)
* [Docker & Docker Compose](https://www.docker.com/)

### 1. Clone & Install
```bash
git clone https://github.com/harshit-tiwari-codebase/Argus.git
cd Argus
npm install
```

### 2. Run in Development Mode
```bash
npm run dev
```

### 3. Build & Production Start
```bash
npm run build
npm start
```

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
