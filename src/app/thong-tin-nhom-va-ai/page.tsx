import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import styles from "@/app/thong-tin-nhom-va-ai/style.module.css";

const data: {
	name: string;
	function: string;
	mssv: string;
}[] = [
	{
		name: "Lê Phạm Khang",
		function: "Soạn nội dung",
		mssv: "SE161421",
	},
	{
		name: "Lê Hà An",
		function: "Thiết kế web",
		mssv: "SE180016",
	},
	{
		name: "Võ Quốc Bình",
		function: "Soạn nội dung",
		mssv: "SS171040",
	},
	{
		name: "Nguyễn Việt Hoàng",
		function: "Thiết kế web",
		mssv: "SE161371",
	},
	{
		name: "Phạm Ngọc Duy Khánh",
		function: "Soạn nội dung",
		mssv: "SE184324",
	},
];

const techStack = [
	{
		category: "Frontend Framework",
		technologies: ["Next.js", "React", "TypeScript"],
	},
	{
		category: "Styling & Animation",
		technologies: ["Tailwind CSS", "CSS Modules", "Framer Motion"],
	},
	{
		category: "Maps & Visualization",
		technologies: ["Leaflet", "React Leaflet"],
	},
	{
		category: "AI Integration",
		technologies: ["Google Generative AI"],
	},
	{
		category: "Icons & UI",
		technologies: ["Lucide React"],
	},
	{
		category: "Development Tools",
		technologies: ["Biome", "Turbopack"],
	},
];

const aiResources = [
	{
		category: "AI Content Generation Tools",
		resources: [
			{
				name: "ChatGPT",
				description: "Sử dụng để lọc và tổng hợp nội dung",
				url: "https://chatgpt.com/share/68e9d118-4794-800e-87b4-6fcb5a1e0bac",
				type: "AI Tool",
			},
			{
				name: "Perplexity AI",
				description: "Nghiên cứu và soạn nội dung chi tiết 30 năm",
				url: "https://www.perplexity.ai/search/soan-noi-dung-chi-tiet-30-nam-75qdYbyoT1muO7ZfpUO4dw#0",
				type: "AI Tool",
			},
		],
	},
	{
		category: "Content Documents",
		resources: [
			{
				name: "Bản đồ - Hành trình 30 năm giải cứu Đất nước",
				description: "Nội dung được lọc từ AI về bản đồ hành trình",
				url: "https://docs.google.com/document/d/1VtPMQ_AnQjVB7XADYl-iSdkcoslbQCaL53xOeGM0keE/edit?usp=sharing",
				type: "Google Docs",
			},
			{
				name: "HCM202 - Hành trình 30 năm giải cứu Đất nước",
				description: "Tài liệu chính về hành trình 30 năm",
				url: "https://docs.google.com/document/d/1wdtKe0Q82iap8rNssm12kmFCey92BKyvw6CxPkoZ8Z8/edit?usp=sharing",
				type: "Google Docs",
			},
		],
	},
];

const ThongTinNhomVaAiPage = () => {
	return (
		<div>
			<Navbar />
			<div className={styles.container}>
				<h1>Thông tin thành viên nhóm </h1>
				<div className={styles.teamGrid}>
					{data.map((member, index) => (
						<div key={index} className={styles.memberCard}>
							<h3>{member.name}</h3>
							<p className={styles.mssv}>{member.mssv}</p>
							<p className={styles.function}>{member.function}</p>
						</div>
					))}
				</div>

				<h2 className={styles.techTitle}>Công nghệ sử dụng</h2>
				<div className={styles.techGrid}>
					{techStack.map((stack, index) => (
						<div key={index} className={styles.techCard}>
							<h3>{stack.category}</h3>
							<ul className={styles.techList}>
								{stack.technologies.map((tech, techIndex) => (
									<li key={techIndex}>{tech}</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<h2 className={styles.aiTitle}>Công cụ AI & Tài liệu tham khảo</h2>
				<div className={styles.aiGrid}>
					{aiResources.map((category, categoryIndex) => (
						<div key={categoryIndex} className={styles.aiCategory}>
							<h3 className={styles.aiCategoryTitle}>{category.category}</h3>
							<div className={styles.aiResourceGrid}>
								{category.resources.map((resource, resourceIndex) => (
									<div key={resourceIndex} className={styles.aiResourceCard}>
										<div className={styles.aiResourceHeader}>
											<h4>{resource.name}</h4>
											<span className={styles.aiResourceType}>
												{resource.type}
											</span>
										</div>
										<p className={styles.aiResourceDescription}>
											{resource.description}
										</p>
										<a
											href={resource.url}
											target="_blank"
											rel="noopener noreferrer"
											className={styles.aiResourceLink}
										>
											Xem chi tiết →
										</a>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ThongTinNhomVaAiPage;
