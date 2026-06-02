---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I am Zhaochen Su (苏肇辰), a first-year PhD student co-supervised by [Prof. Junxian He](https://jxhe.github.io/) and [Prof. May Fung](https://mayrfung.github.io/) at the Hong Kong University of Science and Technology (HKUST).

I obtained my Bachelor's and Master's degrees from Soochow University, advised by [Prof. Juntao Li](https://lijuntaopku.github.io/) and [Prof. Min Zhang](https://zhangmin-nlp-ai.github.io/).

🧠 In the era of generative AI, I am passionate about understanding knowledge and reasoning in LLM/LVLM. My work has explored the mechanisms of model knowledge (ConflictBank), the adaptation to time-sensitive knowledge (LMLM, SG-TLM), and universal temporal reasoning (CotempoQA, Timo).

🤖 Now, in the era of agentic AI, I am highly interested in the next generation of multimodal agent models. My research focuses on building human-like think-act agents with rich multimodal tool use (OpenThinkIMG), advancing realistic and challenging evaluation benchmarks (AgentVista), and enabling continual self-improvement through experience and skill learning (XSkill).

📖 *Can the progress of civilization, and the advancement of technology truly transcend time? Or are we just endlessly pursuing the elusive dust in the hourglass?* — Just some of my thoughts.

# 🔥 News

<style>
.news-container {
  max-height: 220px;
  overflow-y: auto;
  padding: 15px 16px 15px 18px;
  margin: 0 0 22px 0;
  border-left: 3px solid #224b8d;
  border-radius: 8px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.96), rgba(247,250,255,0.92));
  box-shadow:
    0 -8px 16px -12px rgba(34, 75, 141, 0.18),
    0 8px 16px -12px rgba(34, 75, 141, 0.22),
    0 2px 8px rgba(20, 42, 80, 0.06);
}
.news-container ul {
  margin-bottom: 0;
}
.news-container li {
  margin-bottom: 0.58em;
}
.news-container li:last-child {
  margin-bottom: 0;
}
.news-container::-webkit-scrollbar {
  width: 6px;
}
.news-container::-webkit-scrollbar-track {
  background: #eef2f8;
  border-radius: 3px;
}
.news-container::-webkit-scrollbar-thumb {
  background: #9eb2cf;
  border-radius: 3px;
}
.news-container::-webkit-scrollbar-thumb:hover {
  background: #7e98bd;
}
.pub-toggle-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 4px 0 18px 0;
}
.pub-toggle-btn {
  min-height: 34px;
  padding: 7px 15px;
  border: 1px solid #224b8d;
  background: transparent;
  color: #224b8d;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  transition: all 0.2s ease;
}
.pub-toggle-btn:hover {
  background: rgba(34, 75, 141, 0.08);
}
.pub-toggle-btn.active {
  background: #224b8d;
  color: #fff;
}
.pub-item {
  margin-bottom: 1.45em;
  padding-left: 12px;
  border-left: 2px solid #e6edf7;
}
.pub-item.full-only {
  display: none;
}
.show-full .pub-item.full-only {
  display: block;
}
.pub-item p {
  margin-bottom: 0.42em;
}
.timeline {
  position: relative;
  padding-left: 24px;
  margin: 10px 0 20px 8px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #224b8d, #8fb0d9);
}
.timeline-item {
  position: relative;
  padding-bottom: 20px;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -29px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #224b8d;
}
.timeline-item.current::before {
  background: #224b8d;
  box-shadow: 0 0 0 3px rgba(34, 75, 141, 0.16);
}
.timeline-date {
  font-size: 13px;
  color: #777;
  margin-bottom: 2px;
}
.timeline-title {
  font-weight: 600;
  font-size: 15px;
  color: #333;
}
.timeline-desc {
  font-size: 14px;
  color: #666;
}
@media (max-width: 600px) {
  .news-container {
    max-height: 260px;
    padding-right: 12px;
  }
  .pub-toggle-btn {
    min-height: 32px;
    padding: 7px 13px;
  }
}
</style>

<div class="news-container" markdown="1">

- \[03/2026\] 🎉🎉 We released [XSkill](https://arxiv.org/pdf/2603.12056), the first dual-stream framework that enables multimodal agents to continually learn from experience and skills without parameter updates.
- \[02/2026\] 🎉🎉 We released [AgentVista](https://arxiv.org/pdf/2602.23166), the first benchmark for **multimodal agents** on realistic, ultra-challenging visual scenarios requiring long-horizon hybrid tool use.
- \[02/2026\] 🎉🎉 Kimi K2.5 tech report has been released. [arXiv](https://arxiv.org/abs/2602.02276)
- \[01/2026\] 🎉🎉 Three papers are accepted by ICLR 2026, and one paper is accepted by TACL.
- \[07/2025\] 🎉🎉 Check out our new [survey](https://arxiv.org/pdf/2506.23918), the first survey on the reasoning paradigm shift from "Think with Text" to "Think with Image" (1k+🌟 on GitHub)!
- \[05/2025\] 🎉🎉 Check out our new project [OpenThinkIMG](https://arxiv.org/pdf/2505.08617), the first end-to-end open-source framework that empowers LVLMs to think with images (300+🌟 on GitHub)!
- \[01/2025\] 🎉🎉 Check out our new paper [PRMBench](https://arxiv.org/pdf/2501.03124), the first process-level reward benchmark!

</div>

# 📝 Publications (* denotes equal contribution) <a href='https://scholar.google.com/citations?user=ponDXAYAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

<div class="pub-toggle-container">
  <button class="pub-toggle-btn active" type="button" onclick="showSelectedPubs()">Selected</button>
  <button class="pub-toggle-btn" type="button" onclick="showFullPubs()">Full List</button>
</div>

<div id="publications-container">

<div class="pub-item" markdown="1">

``arXiv 26.03`` [XSkill: Continual Learning from Experience and Skills in Multimodal Agents](https://arxiv.org/pdf/2603.12056), Guanyu Jiang*, **Zhaochen Su***, Xiaoye Qu, Yi R. (May) Fung.

</div>

<div class="pub-item" markdown="1">

``arXiv 26.02`` [AgentVista: Evaluating Multimodal Agents in Ultra-Challenging Realistic Visual Scenarios](https://arxiv.org/pdf/2602.23166), **Zhaochen Su**, Jincheng Gao, Hangyu Guo, Zhenhua Liu, Lueyang Zhang, Xinyu Geng, Shijue Huang, Peng Xia, Guanyu Jiang, Cheng Wang, Yue Zhang, Yi R. (May) Fung, Junxian He.

</div>

<div class="pub-item" markdown="1">

``arXiv 25.07`` [Thinking with Images for Multimodal Reasoning: Foundations, Methods, and Future Frontiers](https://arxiv.org/pdf/2506.23918), **Zhaochen Su**, Peng Xia, Hangyu Guo, Zhenhua Liu, Yan Ma, Xiaoye Qu, Jiaqi Liu, Yanshu Li, Kaide Zeng, Zhengyuan Yang, Linjie Li, Yu Cheng, Heng Ji, Junxian He, Yi R. Fung.

</div>

<div class="pub-item" markdown="1">

``arXiv 25.05`` [OpenThinkIMG: Learning to Think with Images via Visual Tool Reinforcement Learning](https://arxiv.org/pdf/2505.08617), **Zhaochen Su**, Linjie Li, Mingyang Song, Yunzhuo Hao, Zhengyuan Yang, Jun Zhang, Guanjie Chen, Jiawei Gu, Juntao Li, Xiaoye Qu, Yu Cheng.

</div>

<div class="pub-item full-only" markdown="1">

``ICLR 2026`` [GRACE: Generative Representation Learning via Contrastive Policy Optimization](https://arxiv.org/pdf/2510.04506), Jiashuo Sun, Shixuan Liu, **Zhaochen Su**, Xianrui Zhong, Pengcheng Jiang, Bowen Jin, Peiran Li, Weijia Shi, Jiawei Han.

</div>

<div class="pub-item full-only" markdown="1">

``ICLR 2026`` [Advancing Multimodal Reasoning: From Optimized Cold Start to Staged Reinforcement Learning](https://arxiv.org/pdf/2506.04207), Shuang Chen, Yue Guo, **Zhaochen Su**, Yafu Li, Yulun Wu, Jiacheng Chen, Jiayu Chen, Weijie Wang, Xiaoye Qu, Yu Cheng.

</div>

<div class="pub-item" markdown="1">

``ACL 2025`` [PRMBench: A Fine-grained and Challenging Benchmark for Process-Level Reward Models](https://arxiv.org/pdf/2501.03124), Mingyang Song, **Zhaochen Su**, Xiaoye Qu, Jiawei Zhou, Yu Cheng.

</div>

<div class="pub-item" markdown="1">

``NeurIPS 2024`` [ConflictBank: A Benchmark for Evaluating Knowledge Conflicts in Large Language Models](https://arxiv.org/pdf/2408.12076), **Zhaochen Su**, Jun Zhang, Xiaoye Qu, Tong Zhu, Yanshu Li, Jiashuo Sun, Juntao Li, Min Zhang, Yu Cheng.

</div>

<div class="pub-item" markdown="1">

``COLM 2024`` [Timo: Towards Better Temporal Reasoning for Language Models](https://arxiv.org/pdf/2406.14192), **Zhaochen Su**, Jun Zhang, Tong Zhu, Xiaoye Qu, Juntao Li, Min Zhang, Yu Cheng.

</div>

<div class="pub-item" markdown="1">

``ACL 2024 oral`` [Living in the Moment: Can Large Language Models Grasp Co-Temporal Reasoning?](https://arxiv.org/pdf/2406.09072), **Zhaochen Su**, Juntao Li, Jun Zhang, Tong Zhu, Xiaoye Qu, Pan Zhou, Yan Bowen, Yu Cheng, Min Zhang.

</div>

<div class="pub-item full-only" markdown="1">

``EMNLP 2024`` [SURf: Teaching Large Vision-Language Models to Selectively Utilize Retrieved Information](https://arxiv.org/pdf/2409.14083), Jiashuo Sun, Jihai Zhang, Yucheng Zhou, **Zhaochen Su**, Xiaoye Qu, Yu Cheng.

</div>

<div class="pub-item" markdown="1">

``EMNLP 2023`` [Efficient Continue Training of Temporal Language Model with Structural Information](https://aclanthology.org/2023.findings-emnlp.418.pdf), **Zhaochen Su**, Juntao Li, Zikang Zhang, Zihan Zhou, Min Zhang.

</div>

<div class="pub-item" markdown="1">

``EMNLP 2022`` [Improving Temporal Generalization of Pre-trained Language Models with Lexical Semantic Change](https://aclanthology.org/2022.emnlp-main.428.pdf), **Zhaochen Su**, Zecheng Tang, Xinyan Guan, Lijun Wu, Min Zhang, Juntao Li.

</div>

</div>

<script>
function showSelectedPubs() {
  document.getElementById('publications-container').classList.remove('show-full');
  document.querySelectorAll('.pub-toggle-btn')[0].classList.add('active');
  document.querySelectorAll('.pub-toggle-btn')[1].classList.remove('active');
}
function showFullPubs() {
  document.getElementById('publications-container').classList.add('show-full');
  document.querySelectorAll('.pub-toggle-btn')[0].classList.remove('active');
  document.querySelectorAll('.pub-toggle-btn')[1].classList.add('active');
}
</script>

# 🎖 Honors and Awards
- National Scholarship in China
- Soochow University Graduate Outstanding Scholarship (Rank 1st)
- The Samsung Scholarship
- China Software Design Competition -- First Prize (National Level, Team Leader)
- Chinese Collegiate Computing Competition -- Second Prize (National Level, Team Leader)

# 📖 Educations
- 2025.09 - 2028.6 (expected), PhD, Computer Science & Engineering Department, HKUST, Hong Kong.
- *2022.09 - 2025.07*, Master, Artificial Intelligence Research Institute, Soochow University, Suzhou.
- *2018.09 - 2022.06*, Bachelor, Institute of Computer Science and Technology, Soochow University, Suzhou.
- *2021.07 - 2022.07*, Dual Degree, Brain Science, Soochow University, Suzhou.

# 💁 Volunteer
- **Area Chair:** ACL-26, ACL-25, EMNLP-25
- **Reviewer:** COLM-25, ICLR-25, NeurIPS-25, ARR-24, EMNLP-24, MM-24, ACL-24, COLM-24
- *2023.09 - 2024.12*, Soochow University Graduate Student Union - **President**
- *2020.05 - 2021.05*, Students’ International Communication Association (SICA) - **President**

# 💻 Internships

<div class="timeline">
  <div class="timeline-item current">
    <div class="timeline-date">2025.08 - Present</div>
    <div class="timeline-title"><a href="https://www.kimi.com/zh">Agent team of Kimi</a></div>
    <div class="timeline-desc">China</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2021.06 - 2021.09</div>
    <div class="timeline-title"><a href="http://www.whitr-ap.org/">World Heritage Institute of Training and Research for the Asia and the Pacific Region under the auspices of UNESCO</a></div>
    <div class="timeline-desc">China</div>
  </div>
</div>

# 🎨 Miscellaneous
I’m passionate about photography, philosophy, and sports. Staying active is a daily priority for me — some of my go-to activities include 🏋️ fitness, 🏓 table tennis, 🎾 tennis, 🏃 running, 🚴 cycling, and 🥾 hiking. I love the challenge of pushing my limits and exploring the outdoors. If you’re into fitness too, feel free to reach out to me, and let’s keep each other motivated!



