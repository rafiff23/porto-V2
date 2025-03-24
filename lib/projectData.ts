export const projects = [
  {
    id: 1,
    slug: "project-1",
    title: "Customer Lifetime Value Prediction",
    description:
      "Developed machine learning models using both Random Forest and Deep Learning (MLP) to predict Customer Lifetime Value (CLV), specifically tailored for a Car Insurance Company. The solution was deployed via Streamlit to enable real-time insights for marketing and customer retention teams, helping the company make data-driven decisions on customer segmentation and value forecasting.",
    images: [
      "/images/clv-6.png",
      "/images/clv-1.png",
      "/images/clv-2.png",
      "/images/clv-4.png",
      "/images/clv-5.png"
    ],
    tech: ["Machine Learning", "Python", "Streamlit", "Canva", "Deep Learning"],
    linkProject: "https://clvprediction.streamlit.app/",
    repo: "https://github.com/rafiff23/CLV_Prediction",
    presentationLink: "https://www.canva.com/design/DAGipxJvJKU/O1cZ2t0OY4ZpHsJj9XJBDg/edit?utm_content=DAGipxJvJKU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 2,
    slug: "project-2",
    title: "Airbnb Analysis",
    description:
      "Conducted an in-depth analysis of 5,790 properties without reviews to uncover key factors influencing listing activation rates. Designed and developed an interactive dashboard using Tableau to visualize insights, enabling stakeholders to identify property characteristics that impact activation and optimize listing strategies accordingly.",
    images: [
      "/images/airbnb-8.png",
      "/images/airbnb-1.png",
      "/images/airbnb-7.png",
      "/images/airbnb-2.png",
      "/images/airbnb-4.png"
    ],
    tech: ["Data Analysis", "Python", "Tableau", "Canva"],
    linkProject: "https://public.tableau.com/app/profile/muhammad.rafif8355/viz/AirbnbAnalysis-Rafif/Dashboard1",
    repo: "https://github.com/rafiff23/Airbnb_Analysis",
    presentationLink: "https://www.canva.com/design/DAGiqfUIY5Y/zpo4FVF-NfZjT-qfCyTegA/edit?utm_content=DAGiqfUIY5Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 3,
    slug: "project-3",
    title: "Optimizing Concrete Strength Prediction (IEEE ICICoS)",
    description:
      "Published research at IEEE ICICoS on optimizing concrete strength prediction using Random Forest with hyperparameter tuning (Random Search) in R, achieving MAE < 4 and R² > 90%, improving mix design accuracy and construction quality.",
    images: [
      "/images/concrete-3.png",
      "/images/concrete-2.png",
    ],
    tech: ["Machine Learning", "R", "Random Forest"],
    linkProject: "https://www.scopus.com/record/display.uri?eid=2-s2.0-85202838977&origin=recordpage",
    repo: "#",
    presentationLink: "https://www.canva.com/design/DAGiqSSnOVk/xq5dBCymYqcMPUb_-tGt0A/edit?utm_content=DAGiqSSnOVk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 4,
    slug: "project-4",
    title: "Polarity Prediction and Sentiment Analysis in IKN-related Posts",
    description:
      "Conducted sentiment analysis on social media posts related to IKN (Ibu Kota Nusantara) on platform X (formerly Twitter), incorporating buzzer/bot identification to enhance data reliability. Leveraged a hybrid approach combining Convolutional Neural Networks (CNN) and Latent Dirichlet Allocation (LDA) to accurately predict text polarity scores and extract topic clusters. The analysis provided deeper insights into public discourse, engagement patterns, and the presence of coordinated opinion shaping behavior around the new capital development initiative.",
    images: [
      "/images/ikn-1.png",
      "/images/ikn-2.png",
      "/images/ikn-3.png",
      "/images/ikn-4.png",
      "/images/ikn-5.png"
    ],
    tech: ["Machine Learning", "Python", "Sentiment Analysis", "Canva", 'Deep Learning'],
    linkProject: "#",
    repo: "https://github.com/rafiff23/SentimentAnalyis_on_IKN",
    presentationLink: "https://www.canva.com/design/DAGik5wkL_U/_aEjzpOLFfQ05FQN55ki5w/edit?utm_content=DAGik5wkL_U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 5,
    slug: "project-5",
    title: "Cohort Analysis in Beauty E-commerce",
    description:
      "This project explored user behavior patterns in a beauty e-commerce platform through cohort analysis, focusing on customer retention, repeat purchases, and engagement over time. Python was used to clean and group transaction data into user cohorts, helping identify differences in buying frequency and customer value. The insights were visualized using Looker Studio dashboards to support marketing and product teams in improving targeting strategies and customer retention efforts.",
    images: [
      "/images/rfm-1.png"
    ],
    tech: ["Data Analysis", "Python", "Cohort Analysis", "Canva", 'Looker Studio'],
    linkProject: "https://lookerstudio.google.com/u/0/reporting/743c1770-137b-4a0e-a693-aa61457e767b",
    repo: "https://github.com/rafiff23/Cosmetic_Ecommerce_Cohort",
    presentationLink: "https://www.canva.com/design/DAGfMWEIG7I/MngJ5hRzL7JOXxtYVo0KWA/edit?utm_content=DAGfMWEIG7I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 6,
    slug: "project-6",
    title: "RFM Analysis in Beauty a Department Store",
    description:
      "This project focused on customer segmentation in a department store using RFM (Recency, Frequency, Monetary) analysis. Python was used to calculate RFM scores and group customers based on their shopping behavior. The results helped identify key segments such as loyal shoppers and inactive customers, and supported marketing teams in optimizing targeting strategies and improving campaign performance.",
    images: [
      "/images/rfm-2.png"
    ],
    tech: ["Data Analysis", "Python", "RFM Analysis", "Canva"],
    linkProject: "#",
    repo: "https://github.com/rafiff23/RFM_OnlineRetail",
    presentationLink: "https://www.canva.com/design/DAGfMWEIG7I/MngJ5hRzL7JOXxtYVo0KWA/edit?utm_content=DAGfMWEIG7I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 7,
    slug: "project-7",
    title: "Gudang Garam Stock Forecasting",
    description:
      "This project focused on stock price forecasting for a mutual fund company using Prophet, a time series forecasting model. Python was used to train and evaluate the model to predict GGRM stock prices over the next year. The goal was to support fund managers in executing long-short trading strategies, improving risk management, and maximizing returns through price movement insights. The results helped enhance data-driven decision-making in investment planning.",
    images: [
      "/images/ggrm.png"
    ],
    tech: ["Forecasting", "Python", "Prophet", "Machine Learning"],
    linkProject: "#",
    repo: "https://github.com/rafiff23/GudangGaram_Stock_Forecasting",
    presentationLink: "#"
  },
  {
    id: 8,
    slug: "project-8",
    title: "Interactive Dashboard Showcase",
    description:
      "An extensive collection of dashboards was designed using Tableau and Looker Studio to present insights from various past projects. Each dashboard highlights key findings, trends, and business opportunities across different domains, providing a clear visual narrative to support data-driven decision-making and stakeholder engagement.",
    images: [
      "/images/dash.png"
    ],
    tech: ["Tableau", "Looker Studio"],
    linkProject: "#",
    repo: "#",
    presentationLink: "https://www.canva.com/design/DAGfqbbg2js/temutIJi4rYBSZcinn5WPw/edit?utm_content=DAGfqbbg2js&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 9,
    slug: "project-9",
    title: "FUT 24 CRUD",
    description:
      "A CRUD (Create, Read, Update, Delete) system was developed using Python to support core functionalities of the FC24 Ultimate Team Companion App. The system allows users to manage player data, update team compositions, and organize in-app assets with ease.",
    images: [
      "/images/fifa.png"
    ],
    tech: ["CRUD", "Python"],
    linkProject: "#",
    repo: "https://github.com/rafiff23/FC24_CRUD",
    presentationLink: "#"
  },
  {
    id: 10,
    slug: "project-10",
    title: "Systematic Literature Review on Implementation of Chatbots for Commerce Use (ICCSCI)",
    description:
      "Explored the growing role of chatbots in enhancing customer engagement within e-commerce as businesses adapt to digital transformation. The study highlights how advancements in chatbot technology have made them more human-like, efficient, and accessible for implementation. It covers real-world use cases, benefits, and their impact on customer interaction strategies. The research has been formally published in a Scopus-indexed scientific journal, contributing to the academic discourse on digital business solutions and conversational AI.",
    images: [
      "/images/publication-1.png"
    ],
    tech: ["Publication", "Article"],
    linkProject: "https://www.scopus.com/record/display.uri?eid=2-s2.0-85184354596&origin=recordpage",
    repo: "#",
    presentationLink: "#"
  },
  {
    id: 11,
    slug: "project-11",
    title: "House Market Analysis",
    description:
      "Analyzed historical house market data spanning from 1872 to 2010 using R to uncover long-term trends in property prices, sales patterns, and economic shifts. The analysis involved data cleaning, transformation, and visualization using R libraries such as ggplot2, dplyr, and tidyr. Key insights were drawn from fluctuations in pricing across decades, identifying market cycles and regional variations. The findings helped illustrate how economic events and demographic changes have shaped the housing market over time.",
    images: [
      "/images/house.png"
    ],
    tech: ["Data Analysis", "R"],
    linkProject: "#",
    repo: "https://github.com/rafiff23/HouseMarketAnalysis",
    presentationLink: "#"
  },
  {
    id: 12,
    slug: "project-12",
    title: "Skin Cancer Prediction (Image Classification)",
    description:
      "Developed deep learning models to classify dermal cell images and support early detection of skin cancer. Leveraged the U-Net architecture for image segmentation to accurately identify cancerous regions within dermal tissue samples. The model was trained using annotated medical imaging datasets and evaluated on key performance metrics such as accuracy, precision, and IoU (Intersection over Union). This approach enhances diagnostic accuracy and demonstrates the potential of AI in medical image analysis.",
    images: [
      "/images/skin.png"
    ],
    tech: ["Machine Learning", "Python", "Deep Learning", "U-NET"],
    linkProject: "#",
    repo: "https://github.com/rafiff23/SkinCancer_Prediction",
    presentationLink: "#"
  },
  {
    id: 13,
    slug: "project-13",
    title: "Appsheet Showcase",
    description:
      "Implemented machine learning models using Neural Networks (NN) and Convolutional Neural Networks (CNN) to classify audio signals across different categories. The models were trained on labeled audio datasets to recognize patterns in sound waves and spectrograms, enabling accurate classification of speech, music, and environmental sounds. This project highlights the application of deep learning in audio analysis and pattern recognition.",
    images: [
      "/images/appsheet.png"
    ],
    tech: ["Appsheet", 'Google Spreadsheets'],
    linkProject: "#",
    repo: "#",
    presentationLink: "https://www.canva.com/design/DAFIRG7Suvg/JZnP4oCzWnI-pccmt7Avtg/edit?utm_content=DAFIRG7Suvg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 14,
    slug: "project-14",
    title: "HR Analytics Dashboard",
    description:
      "Conducted human resource data analysis to uncover patterns related to employee performance, retention, and workforce composition. Utilized R and the Shiny web framework to build an interactive dashboard that enabled stakeholders to explore key HR metrics, filter insights by department or role, and support strategic decision-making in talent management.",
    images: [
      "/images/hr.png"
    ],
    tech: ["Data Analysis", "R", "Shiny Web App"],
    linkProject: "https://rafif.shinyapps.io/HumanResource/",
    repo: "https://github.com/rafiff23/HumanResource-ShinyWebApp",
    presentationLink: "#"
  },
  {
    id: 15,
    slug: "project-15",
    title: "E-Commerce RFM",
    description:
      "Performed RFM (Recency, Frequency, Monetary) analysis on e-commerce transaction data to segment customers based on purchasing behavior. Leveraged R and the Shiny web framework to develop an interactive dashboard that allows dynamic filtering, customer profiling, and visual exploration of segment performance. This solution enabled clearer understanding of customer value and supported data-driven marketing strategies.",
    images: [
      "/images/rfm-3.png"
    ],
    tech: ["Data Analysis", "R", "RFM Analysis", "Shiny Web App"],
    linkProject: "https://rafif.shinyapps.io/Ecommerce/",
    repo: "https://github.com/rafiff23/ECommerce",
    presentationLink: "#"
  },
];
