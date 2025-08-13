export const researchOverviewItems = [
  {
    id: 1,
    title: "Ray Tracing Analysis for UAV Networks",
    description:
      "We investigate the RF coverage and MIMO channel rank of UAV networks in dense-foliage rural environments using Sionna-based ray tracing simulations. By integrating realistic tree models in Blender and environmental data from OpenStreetMap, we analyze how foliage and terrain affect connectivity in terms of received signal strength and channel rank. The results are validated against real-world AERPAW measurements.",
    image1:
      "https://jijisusu3.github.io/donggu-lee-portfolio/research/research1_1.png",
    image2:
      "https://jijisusu3.github.io/donggu-lee-portfolio/research/research1_2.png",
    tags: ["MATLAB", "Sionna (NVIDIA)", "Python", "Blender"],
    detailLink: "/research/1",
    publicationLink: "https://ieeexplore.ieee.org/abstract/document/11066253",
  },
  {
    id: 2,
    title: "Link Performance Evaluation for Asymmetric UAV-RC Links",
    description:
      "This study investigates uplink (UL) and downlink (DL) asymmetry, primarily caused by LoS ISM-band interference, which impacts UAV link reliability. We use MATLAB LTE, 5G, and WLAN Toolboxes to simulate the effect of UL SINR asymmetry on HARQ feedback and throughput. To find physical evidence, a measurement campaign was conducted using a Helikite. The results show that UL asymmetry significantly reduce throughput, emphasizing the need for UL robustness.",
    image1:
      "https://jijisusu3.github.io/donggu-lee-portfolio/research/research2_1.png",
    image2:
      "https://jijisusu3.github.io/donggu-lee-portfolio/research/research2_2.png",
    tags: ["MATLAB (LTE, 5G, and WLAN Toolboxes)"],
    detailLink: "/research/2",
    publicationLink: "https://arxiv.org/abs/2507.20392",
  },
  {
    id: 3,
    title:
      "Deep Reinforcement Learning (DRL)-based Adaptive Modulation and Coding (AMC) Scheme",
    description:
      "This research explores RL to improve wireless communication systems. Starting with a DQN-based adaptive modulation scheme, we improved spectral efficiency. We then adopted a neural episodic control (NEC) algorithm into AMC schemes, achieving faster learning. Finally, we introduced a multi-agent NEC framework for UAV-assisted IoRT networks, where network elements cooperatively learn and optimize resources over a shared goal of maximizing energy efficiency.",
    image1:
      "https://jijisusu3.github.io/donggu-lee-portfolio/research/research3_1.png",
    image2:
      "https://jijisusu3.github.io/donggu-lee-portfolio/research/research3_2.png",
    tags: ["Python", "TensorFlow"],
    detailLink: "/research/3",
    publicationLink: "https://ieeexplore.ieee.org/abstract/document/9025237",
  },
];

export const researchDetailItems = [
  {
    id: 1,
    title: "Ray Tracing Analysis for UAV Networks",
    sections: {
      overview: {
        description:
          "We investigate the RF coverage and MIMO channel rank of UAV networks in dense-foliage rural environments using Sionna-based ray tracing simulations. By integrating realistic tree models in Blender and environmental data from OpenStreetMap, we analyze how foliage and terrain affect connectivity in terms of received signal strength and channel rank. The results are validated against real-world AERPAW measurements.",
        images: [
          "https://jijisusu3.github.io/donggu-lee-portfolio/research/research1_1.png",
          "https://jijisusu3.github.io/donggu-lee-portfolio/research/research1_2.png",
        ],
      },
      motivation: {
        bullets: [
          "The impact of vegetation and foliage on wireless propagation has not been thoroughly characterized in prior studies.",
          "A ray tracing-based approach enables fine-grained analysis of RF coverage and spatial channel rank in complex environments.",
          "Realistic, foliage-aware modeling is essential for accurate UAV network planning and performance optimization.",
        ],
      },
      contributions: {
        bullets: [
          "Integrated realistic tree and terrain modeling based on OpenStreetMap and 3D tree models to capture propagation characteristics (RF coverage and channel rank) in dense-foliage environments.",
          "Proposed a Kriging-based 3D channel rank interpolation scheme to estimate the channel rank by using spatial correlation over large areas.",
          "Validated ray tracing simulation results with real-world measurements collected from the NSF AERPAW testbed.",
        ],
      },
      tools: {
        bullets: [
          "Sionna (NVIDIA): Ray tracing simulation and RF setups",
          "Blender: 3D modeling for trees, terrain, and buildings",
          "OpenStreetMap (OSM): Terrain information",
          "MATLAB: Post-processing, Kriging interpolation, and visualization",
        ],
      },
      results: [
        {
          title: "Foliage-Aware Ray Tracing Visualization",
          description: [
            "Figures on the left show the tree model in Blender, satellite view of Lake Wheeler Field Labs. at NC State University area, and Blender scene view, respectively. The tree model is randomly populated within forest area in the target environments. The tree has height of 20 m and maximum diameter of 10 m. LW1 through LW5 indicate the location of transmitter towers in the AERPAW testbed.",
            "Figures on the right show the RF coverage simulation results using Sionna. The resolution of the heatmap is 30 m x 30 m. The first result is based on 30 m altitude of UAV (receiver) with LW1 tower (transmitter), while the next one is based on 110 m altitude of UAV. Polygons indicate building and forest area. The results clearly show the blockage effect with the lower altitude, e.g., north side of the target environments. However, it is significantly mitigated as the altitude of UAV increased by 110 m.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail1_1.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail1_2.png",
          ],
        },
        {
          title: "Channel Rank Analysis",
          description: [
            "Figures show the simulation results of the channel rank distribution with 30 m altitude of UAV and 10 dB (left) and 20 dB (right) range of singular value from the strongest singular value for rank calculation, respectively. Cyan dashed lines indicate the boundary of coverage. The ratio of channel rank of 2 is increased nearby the tower as the range increases, implying two major spatial stream of LoS and ground reflective path.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail1_3.png",
          ],
        },
        {
          title: "Ray Tracing vs. Real-World Measurement: RSS",
          description: [
            "Figure on the left show the predefined trajectory of UAV-based measurement campaign, while the figure on the middle show the altitude over time. Here, UAV transmit the signals, and each tower (LW1 ~ LW5) measure the received signal strength (using dual channel USRP). Ray tracing is conducted over the predefined trajectory.",
            "Figure on the right show the results of ray tracing and dual channel USRP at the LW1 tower. Ray tracing shows the reasonable match to the measurement, measurement show RSS variation at each waypoint due to changing direction of UAV.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail1_4.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail1_5.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail1_6.png",
          ],
        },
      ],
      resources: {
        links: [
          {
            title:
              'Donggu Lee et al., "Analysis and prediction of coverage and channel rank for UAV networks in rural scenarios with foliage," IEEE Open Journal of Vehicular Technology, vol. 6, pp. 1943-1962, July 2025. ',
            page: "https://ieeexplore.ieee.org/abstract/document/11066253",
          },
          {
            title:
              'Donggu Lee and Ismail Guvenc, "Rank and condition number analysis for UAV MIMO channels using ray tracing," in Proc. IEEE Vehicular Technology Conference (VTC), Florence, Italy, June 2023, pp. 1-7.  ',
            page: "https://ieeexplore.ieee.org/abstract/document/10199529",
          },
          {
            title:
              "Dryad dataset: https://datadryad.org/dataset/doi:10.5061/dryad.ttdz08m8r",
            page: "https://datadryad.org/dataset/doi:10.5061/dryad.ttdz08m8r",
          },
        ],
      },
    },
    publicationLink: "https://ieeexplore.ieee.org/abstract/document/11066253",
  },
  {
    id: 2,
    title: "Link Performance Evaluation for Asymmetric UAV-RC Links",
    sections: {
      overview: {
        description:
          "This study investigates uplink (UL) and downlink (DL) asymmetry, primarily caused by LoS ISM-band interference, which impacts UAV link reliability. We use MATLAB LTE, 5G, and WLAN Toolboxes to simulate the effect of UL SINR asymmetry on HARQ feedback and throughput. To find physical evidence, a measurement campaign was conducted using a Helikite. The results show that UL asymmetry significantly reduce throughput, emphasizing the need for UL robustness.",
        images: [
          "https://jijisusu3.github.io/donggu-lee-portfolio/research/research2_1.png",
          "https://jijisusu3.github.io/donggu-lee-portfolio/research/research2_2.png",
        ],
      },
      motivation: {
        bullets: [
          "Uplink performance is frequently degraded due to LoS interference in ISM bands.",
          "This asymmetry in SINR can cause failures in HARQ feedback (ACK/NACK) leading to significant throughput loss.",
          "Comparing LTE, 5G and Wi-Fi transmission and feedback mechanisms highlights the vulnerability of feedback-dependent systems to uplink asymmetry, offering practical insight for ISM band expansion in UAV networks.",
        ],
      },
      contributions: {
        bullets: [
          "Simulated HARQ feedback loss performance over LTE, 5G, and Wi-Fi with underlying fundamentals.",
          "Quantified throughput degradation due to HARQ loss in asymmetric scenarios.",
          "Conducted helikite-based measurement campaign to obtain physical proof.",
        ],
      },
      tools: {
        bullets: [
          "MATLAB Toolboxes: LTE, 5G, and WLAN toolboxes for link-level simulations",
        ],
      },
      results: [
        {
          title: "Helikite Measurement Campaign Results in Urban Areas",
          description: [
            "Figure on the shows the deployment spot of the measurement campaign and festival area during 2024 Packapalooza at Main Campus area of NC State University. Helikite floated nearby the festival area and capturing received signal strength within non-overlapping channel 1 in 2.4 GHz ISM band.",
            "Figure on the middle show the received signal power over altitudes, while figure on the right side show the same results over the time duration along with the altitude information. It is clearly seen that the received signal power at a higher altitude tends to be higher than at a lower altitude. The gap between maximum and minimum received signal power yields 16.66 dB, which implies significant gap between UL and DL in SINR.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_1.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_2.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_3.png",
          ],
        },
        {
          title: "DL Throughput Evaluation over AWGN with Perfect ACK/NACK",
          description: [
            "Figures on the bottom show the results with various transmission mechanisms: 1) Burst transmission (4 times back-to-back transmission) with CC; 2) HARQ Type-III with incremental redundancy (IR, as in LTE); 3) HARQ Type-I without chase combining (CC); and 4) HARQ Type-I with CC, respectively. MCS1 through MCS3 have QPSK and 0.25, 0.5, and 0.75 coding rate, respectively.",
            "Gap (1): No additional coding gain between IR and CC with already low enough coding rate",
            "Gap (2): IR show coding gain compared to the CC",
            "Gap (3): Throughput improvement from 4 times of transmission",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_4.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_5.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_6.png",
          ],
        },
        {
          title: "Robustness of HARQ Feedback and Impacts on Throughput",
          description: [
            "Figure on the left show the BLER evaluation of feedback and data channels of LTE, 5G, and Wi-Fi. Compared to Wi-Fi, LTE and 5G show improvement of BLER due to sophisticated structure of HARQ indicator (ACK/NACK) in resource grid, while Wi-Fi only support standalone ACK control frame",
            "Figures on the middle and right show the throughput evaluation results of LTE and 5G over AWGN with various UL asymmetric scenarios. Performance degradation due to ACK/NACK loss from SINR asymmetry in UL is shown.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_7.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_8.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail2_9.png",
          ],
        },
      ],
      resources: {
        links: [
          {
            title:
              'Donggu Lee et al., "Reliability of Wi-Fi, LTE, and 5G-based UAV RC links in ISM bands: Uplink interference asymmetry analysis and HARQ design," July 2025, arXiv:2507.20392 ',
            page: "https://arxiv.org/abs/2507.20392",
          },
        ],
      },
    },
    publicationLink: "https://arxiv.org/abs/2507.20392",
  },
  {
    id: 3,
    title:
      "Deep Reinforcement Learning (DRL)-based Adaptive Modulation and Coding (AMC) Scheme",
    sections: {
      overview: {
        description:
          "This research explores RL to improve wireless communication systems. Starting with a DQN-based adaptive modulation scheme, we improved spectral efficiency. We then adopted a neural episodic control (NEC) algorithm into AMC schemes, achieving faster learning. Finally, we introduced a multi-agent NEC framework for UAV-assisted IoRT networks, where network elements cooperatively learn and optimize resources over a shared goal of maximizing energy efficiency.",
        images: [
          "https://jijisusu3.github.io/donggu-lee-portfolio/research/research3_1.png",
          "https://jijisusu3.github.io/donggu-lee-portfolio/research/research3_2.png",
        ],
      },
      motivation: {
        bullets: [
          "Traditional AMC schemes rely on look-up table or BER constraint, which leaves room for improvement.",
          "RL enables optimization on spectral efficiency within predefined environments, e.g., state, action, and reward.",
        ],
      },
      contributions: {
        bullets: [
          "Adopt DQN algorithms to improve spectral efficiency compared to the conventional approach",
          "Enhance learning efficiency by applying NEC algorithm.",
          "Extend DRL framework into multi-agent framework and design cooperative model for a common goal in the IoRT systems.",
        ],
      },
      tools: {
        bullets: [
          "Python, TensorFlow: Custom RL model implementation and simulations",
        ],
      },
      results: [
        {
          title: "DQN-based Adaptive Modulation Scheme",
          description: [
            "Figure on the left shows the proposed DQN-based adaptive modulation scheme. The RL model is trained to control SNR region boundaries to maximize the spectral efficiency. Due to the distinctive structure of DQN, the main network and target networks are separated.",
            "Figure on the right shows the simulation results of the proposed DQN-based adaptive modulation scheme. The proposed scheme yields average of 0.5395 bps/Hz compared to the conventional adaptive modulation scheme.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail3_1.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail3_2.png",
          ],
        },
        {
          title: "NEC-based AMC scheme",
          description: [
            "Figure on the left shows the structure of the proposed NEC-based AMC scheme. Compared to DQN, the NEC algorithm employs distinctive memory structure called differentiable neural dictionary, which leads faster learning and convergence toward the maximum performance.",
            "Figure on the right show the simulation results of comparison over DQN family algorithms and NEC. The NEC shows the fastest training process among other algorithms",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail3_3.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail3_4.png",
          ],
        },
        {
          title: "Multi-agent DRL-based AMC scheme",
          description: [
            "Figure on the left show system model of multi-agent DRL-based AMC scheme for IoRT systems. The elements in the IoRT networks, e.g., satellites, UAV, and sensors, are trained to be cooperatively maximize energy consumption efficiency while accomplish their missions such as measuring and transmitting signals.",
            "Figure on the right show the simulation results of cumulative energy consumption between single agent RL and multi-agent RL framework. In both UAV and sensor cases, the cooperative multi-agent RL yields better performance than a case that a single RL agent controls everything.",
          ],
          images: [
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail3_5.png",
            "https://jijisusu3.github.io/donggu-lee-portfolio/research/research_detail3_6.png",
          ],
        },
      ],
      resources: {
        links: [
          {
            title:
              "Donggu Lee et al., “DQN-based adaptive modulation scheme over wireless communication channels,” IEEE Communications Letters, vol. 24, no. 6, pp. 1289-1293, June 2020.",
            page: "https://ieeexplore.ieee.org/abstract/document/9025237",
          },
          {
            title:
              "Donggu Lee et al., “Neural episodic control-based adaptive modulation and coding scheme for inter-satellite communication link,” IEEE Access, vol. 9, pp. 159175 – 159186, Nov. 2021.",
            page: "https://ieeexplore.ieee.org/abstract/document/9631216",
          },
          {
            title:
              "Donggu Lee et al., “Multi-agent reinforcement learning-based resource allocation scheme for UAV-assisted internet of remote things systems,” IEEE Access, vol. 11, pp. 53155 – 53164, May 2023.",
            page: "https://ieeexplore.ieee.org/abstract/document/10132480",
          },
        ],
      },
    },
    publicationLink: "https://ieeexplore.ieee.org/abstract/document/9025237",
  },
];
