<template>
	<div class="home-container">
		<!-- Header -->
		<header class="header">
			<div class="nav-container">
				<div class="logo">
					<h1>Your Project</h1>
				</div>
				<nav class="nav-menu">
					<a href="#features" class="nav-link">Features</a>
					<a href="#about" class="nav-link">About</a>
					<a href="#contact" class="nav-link">Contact</a>
				</nav>
			</div>
		</header>

		<!-- Hero Section -->
		<section class="hero">
			<div class="hero-content">
				<h2 class="hero-title">Welcome to Your Project</h2>
				<p class="hero-subtitle">
					Build something amazing with our powerful tools and intuitive interface
				</p>
				<div class="hero-actions">
					<button class="btn btn-primary" @click="handleGetStarted">
						Get Started
					</button>
					<button class="btn btn-secondary" @click="handleLearnMore">
						Learn More
					</button>
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section id="features" class="features">
			<div class="container">
				<h3 class="section-title">Key Features</h3>
				<div class="features-grid">
					<div class="feature-card" v-for="feature in features" :key="feature.id">
						<div class="feature-icon">{{ feature.icon }}</div>
						<h4 class="feature-title">{{ feature.title }}</h4>
						<p class="feature-description">{{ feature.description }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Stats Section -->
		<section class="stats">
			<div class="container">
				<div class="stats-grid">
					<div class="stat-item" v-for="stat in stats" :key="stat.label">
						<div class="stat-number">{{ stat.value }}</div>
						<div class="stat-label">{{ stat.label }}</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<div class="container">
				<p>&copy; 2025 Your Project. All rights reserved.</p>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 定义接口
interface Feature {
	id: number
	icon: string
	title: string
	description: string
}

interface Stat {
	label: string
	value: string
}

// 响应式数据
const features = ref<Feature[]>([
	{
		id: 1,
		icon: '🚀',
		title: 'Fast & Efficient',
		description: 'Built with modern technologies for optimal performance'
	},
	{
		id: 2,
		icon: '🎨',
		title: 'Beautiful Design',
		description: 'Clean and intuitive user interface that users love'
	},
	{
		id: 3,
		icon: '🔧',
		title: 'Easy to Use',
		description: 'Simple setup and configuration to get you started quickly'
	},
	{
		id: 4,
		icon: '🛡️',
		title: 'Secure',
		description: 'Enterprise-grade security to protect your data'
	}
])

const stats = ref<Stat[]>([
	{ label: 'Active Users', value: '10K+' },
	{ label: 'Projects Created', value: '50K+' },
	{ label: 'Success Rate', value: '99.9%' },
	{ label: 'Countries', value: '100+' }
])

// 事件处理函数
const handleGetStarted = () => {
	console.log('Get Started clicked')
	// 这里添加跳转逻辑
}

const handleLearnMore = () => {
	console.log('Learn More clicked')
	// 这里添加跳转逻辑
}

// 生命周期
onMounted(() => {
	console.log('HomeView mounted')
})
</script>

<style scoped>
.home-container {
	min-height: 100vh;
	color: #333;
	line-height: 1.6;
}

/* Header */
.header {
	background: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 100;
}

.nav-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70px;
}

.logo h1 {
	margin: 0;
	font-size: 24px;
	font-weight: bold;
	color: #2c3e50;
}

.nav-menu {
	display: flex;
	gap: 30px;
}

.nav-link {
	text-decoration: none;
	color: #666;
	font-weight: 500;
	transition: color 0.3s;
}

.nav-link:hover {
	color: #3498db;
}

/* Hero Section */
.hero {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	padding: 120px 20px;
	text-align: center;
}

.hero-content {
	max-width: 800px;
	margin: 0 auto;
}

.hero-title {
	font-size: 48px;
	margin-bottom: 20px;
	font-weight: 700;
}

.hero-subtitle {
	font-size: 20px;
	margin-bottom: 40px;
	opacity: 0.9;
}

.hero-actions {
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-wrap: wrap;
}

.btn {
	padding: 12px 24px;
	border-radius: 6px;
	font-size: 16px;
	font-weight: 600;
	border: none;
	cursor: pointer;
	transition: all 0.3s;
}

.btn-primary {
	background: #3498db;
	color: white;
}

.btn-primary:hover {
	background: #2980b9;
	transform: translateY(-2px);
}

.btn-secondary {
	background: transparent;
	color: white;
	border: 2px solid white;
}

.btn-secondary:hover {
	background: white;
	color: #667eea;
}

/* Features Section */
.features {
	padding: 80px 20px;
	background: #f8f9fa;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}

.section-title {
	text-align: center;
	font-size: 36px;
	margin-bottom: 60px;
	color: #2c3e50;
}

.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
}

.feature-card {
	background: white;
	padding: 30px;
	border-radius: 12px;
	text-align: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s;
}

.feature-card:hover {
	transform: translateY(-5px);
}

.feature-icon {
	font-size: 48px;
	margin-bottom: 20px;
}

.feature-title {
	font-size: 20px;
	margin-bottom: 15px;
	color: #2c3e50;
}

.feature-description {
	color: #666;
	margin: 0;
}

/* Stats Section */
.stats {
	padding: 80px 20px;
	background: #2c3e50;
	color: white;
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 40px;
	text-align: center;
}

.stat-number {
	font-size: 36px;
	font-weight: bold;
	margin-bottom: 10px;
	color: #3498db;
}

.stat-label {
	font-size: 16px;
	opacity: 0.9;
}

/* Footer */
.footer {
	background: #34495e;
	color: white;
	padding: 30px 20px;
	text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
	.hero-title {
		font-size: 32px;
	}

	.hero-subtitle {
		font-size: 18px;
	}

	.hero-actions {
		flex-direction: column;
		align-items: center;
	}

	.btn {
		width: 200px;
	}

	.nav-menu {
		display: none;
	}
}
</style>
