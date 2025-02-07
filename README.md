<p align="center">
  <img src="https://i.imgur.com/K707rir_d.webp?maxwidth=760&fidelity=grand" alt="Mi Banner" />
</p>

---
# 🐍 Kukulcán: AI-Powered SocialFi Rewards Agent on Mode Network
*Automate Web3 engagement campaigns with AI + $MZCAL rewards*


---

## 🌟 Overview

**Problem Addressed:**  

Traditional SocialFi campaigns often lack transparent and automated reward mechanisms, making it challenging to incentivize genuine community engagement in Web3.

**Video demo** 
https://www.youtube.com/watch?v=H_v_s7qwg8Q

---
## **Our Solution:**
### 🤖 **The Kukulcan Agent: Core Features**   


Kukulcan is an autonomous AI agent designed to **bridge social engagement and on-chain rewards**, leveraging **Mode Network’s Layer 2 infrastructure and Cookie DataSwarm’s** data analytics. Below are its standout features:  



#### 🧠 **AI-Powered Engagement Analysis**  
- **Real-Time Social Data Processing**:  
  - Integrates with Cookie DataSwarm’s `/tweets-search` endpoint to scrape and analyze Twitter/X data (mentions, likes, retweets) around targeted campaigns (e.g., `@modenetwork`).  
  - Calculates an **Engagement Score** for each user using metrics like `engagementsCount` and keyword relevance.  
- **Dynamic Reward Allocation**:  
  - Kukulcan Agent applies our community rewards distribution formula to ensure fair, proportional token distribution:
    ```  
    User’s Rewards = (User’s Points / Total Points) × Total Mining Pool  
    ```  


#### ⚡ **On-Chain Automation**  
- **Seamless Mode Network Integration**:  
  - Transfers ERC-20 tokens (`$MZCAL`) to reward users.  
  - Executes transactions in **5 seconds** (aprox)  with near-zero gas fees, thanks to Mode’s Layer 2 scalability.  
- **Autonomous Triggers**:  
    - User rewards status request →  Automatic Cookie Data Swarm API Queries
        - Campaign Status
        - User Individual Status
  - User rewards transfer request → Instant  and  automatic token transfers.  



#### 💬 **Kukulcán Agent Actions - Community Engagement System**  
Kukulcan supports three key **actions** via a simple UI:  
1. **Check Campaign Status**:  
   - Users view top contributors, campaign timelines, and total rewards.  
   ![banner](https://i.imgur.com/oWvMI14.png)
2. **Verify Eligibility**:  
   - Users query if their Twitter/X handle qualifies for rewards. 
   ![banner](https://i.imgur.com/vx1dY8O.png)
3. **Claim Tokens**:  
   - Eligible users submit their EVM wallet address → Tokens are transferred instantly.  
   ![banner](https://i.imgur.com/zDyFDEV.png)
3. **X  Posting**:  
   - Agent post on X about Guerrero Maya ecosystem.  


#### 🔒 **Security & Reliability**  
- **Data Validation**:  
  - Cross-checks API results against spam filters and duplicate entries.  
- **Smart Contract Audits**:  
  - ERC-20 contract tested for common vulnerabilities (e.g., reentrancy, overflow).  
- **Transparent Execution**:  
  - Every reward calculation and transaction is logged on-chain for public verification.  



#### 🌐 **Future-Proof Design**  
- **Cross-Chain Compatibility** (Roadmap):  
  - Planned support for Ethereum, Polygon, and Base via bridges.  
- **Open-Source Accessibility**:  
  - Post-hackathon, Kukulcan’s codebase will be public for community-driven enhancements.  



#### 🎯 **Why Kukulcan?**  
- **For Projects**: Launch scalable SocialFi campaigns with automated, trustless rewards.  
- **For Users**: Earn tokens for organic engagement—no middlemen, no delays.  
- **For Developers**: A modular architecture ready for customization (e.g., new APIs, chains).  

----
## 🟡 Mode Network Advantage 

Enjoy fast, low-cost transactions with optimized volume technology and **native support for AI agents**. ⚡

### Mode Network Integration

**Optimized Transactions**  
- Leverage Mode Network's Layer 2 capabilities for fast, low-fee transfers. 🚀

**Smart Contract Deployment**  
- An ERC-20 token (`$MZCAL`) with functions (e.g., `transferRewards()`) used as rewards. 💎

**AI Agent Support**  
- Kukulcán, interacting with the `$MZCAL` contract to send token rewards. 🤖

---

### Cookie DataSwarm API Usage

**Integrated Endpoint**  
* `/tweets-search`: Fetches Twitter data to let **Kukulcán** know users with best engagement scores (e.g., for mentions of `@modenetwork`). 📊

---

## Use Cases in DeFi/Web3

🎯 **SocialFi Campaigns**  
- Empower projects to launch token-incentivized campaigns where users are rewarded for organic promotion. 

🎁 **Engagement-Based Airdrops**  
- Fair and verifiable airdrops based on measurable social engagement. 

🌱 **Community Incentives**  
- Continuous, automated reward systems that boost community growth and participation. 

---

## Example - Hackathon Scenario

A 7-day monitoring period on Twitter where Kukulcán identifies the top 10 users by engagement, calculates rewards proportionally, and distributes a pre-defined mining pool of tokens (`$MZCAL`) accordingly. 📈



---

### 🖥️ User Experience (UX)

**Web Interface:**  
Users can view active campaigns, check their eligibility, and claim rewards in just two steps.

**Interactive Queries:**  
The agent provides real-time status updates—informing users if they’re part of the top engagement group.

---

### 🚀 **What We Built During the Hackathon** 

- ✅ **Kukulcan AI Agent**
- ✅ **Kukulcan Cookie Plugin (Eliza)**
- ✅ **Customized Kukulcán UI**
---

## 🛠️ Implementation Guide

**Prerequisites:**

- An EVM-compatible wallet on Mode Sepolia.
- A valid Cookie DataSwarm API key.

**Environment Variables:**
```plaintext
COOKIE_API_KEY=your_cookie_api_key
COOKIE_API_URL=https://api.cookie.fun/v1/hackathon
COOKIE_TWEETS_TOPIC=@modenetwork
MODE_RPC_URL=your_mode_network_rpc_url
EVM_PRIVATE_KEY=your_private_key
AI_MODEL_SECRET_KEY=your_ai_secret
```
---
## 🌐 Roadmap & Future Integrations

🔑 OAuth 2.0 Integration: Secure user authentication (e.g., via Twitter/X). 
🔄 Cross-Chain Features: Extend token distribution to additional chains (e.g., Polygon, Ethereum). 
📊 Kukulcán Trader Action: Enable yield farming strategies by monitoring other agents and reinvesting a portion of the treasury. 
💻 Open-Source Expansion: Release Kukulcán as an open-source solution for wider adoption in SocialFi strategies. 

---

## Team Members

#### Robin

- PM and UX/UI.
- Brussels ETH GLOBAL VARA 2024 winner.
- [GitHub](https://github.com/robinhodl69) | [Email](mailto:jaramillo.jesusj@gmail.com) | [Linkedin](https://www.linkedin.com/in/jaramillojesuslini/)

#### Iván

- FullStack Blockchain developer with 3+ years of experience.
- UI/UX Designer.
- Brussels ETH GLOBAL VARA 2024 winner.
- [GitHub](https://github.com/TerratekMusic) | [Email](mailto:hello@psylabs.io) | [Linkedin](https://www.linkedin.com/in/ivan-avila-4b5689202/)

#### Rafa

- Background in software engineering with 6+ years as a backend specialist with blockchain experience.
- Skilled in Service Oriented Architecture and Rust development.
- [GitHub](https://github.com/RafaelAcuna) | [Email](mailto:rafa.acuna.96@gmail.com) | [Linkedin](https://www.linkedin.com/in/rafael-acuna)

---


