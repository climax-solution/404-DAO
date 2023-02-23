<script	script lang="ts">
	// Blocks
	import BlockRenderer from 'components/BlockRenderer.svelte';
	import type { GenericBlock } from 'lib/blocks';
	import Title from './Title.svelte';
	import Subtitle from './Subtitle.svelte';
	import RichText from './RichText.svelte';
	import Cta from './CTA.svelte';
	import Column from './Column.svelte';
	import Team from './Team.svelte';
	import Partners from './Partners.svelte';
	import Advisors from './Advisors.svelte';
	import Metrics from './Metrics.svelte';
	import Testimonies from './Testimonies.svelte';
	import Photos from './Photos.svelte';
	import Video from './Video.svelte';
	import SubscribeForm from 'components/SubscribeForm.svelte';
	
	// Sections
	import FirstFoldSection from './sections/FirstFoldSection.svelte';
	import ColumnSection from './sections/ColumnSection.svelte';
	import RichTextSection from './sections/RichTextSection.svelte';
	import PartnersSection from './sections/PartnersSection.svelte';
	import TeamSection from './sections/TeamSection.svelte';
	import MentorsSection from './sections/MentorsSection.svelte';
	import AdvisorsSection from './sections/AdvisorsSection.svelte';
	import MetricsSection from './sections/MetricsSection.svelte';
	import TestimoniesSection from './sections/TestimoniesSection.svelte';
	import PhotosSection from './sections/PhotosSection.svelte';
	import VideoSection from './sections/VideoSection.svelte';
	import Mentors from './Mentors.svelte';

	export let data: GenericBlock;
	// console.log(data)
	if (data.blockType == 'ctaBlock') {
		console.log(data.blockType)
		console.log(data)
	}
</script>

<!-- Blocks -->
{#if data.blockType === 'titleBlock'}
	<Title 
		title={data.title} 
	/>
{:else if data.blockType === 'subtitleBlock'}
	<Subtitle 
		subtitle={data.subtitle} 
	/>
{:else if data.blockType === 'richTextBlock'}
	<RichText 
		richText={data.text} 
	/>
{:else if data.blockType === 'ctaBlock'}
	<Cta 
		primary={data.primary}
		secondary={data.secondary}
		tertiary={data.tertiary} 
	/>
{:else if data.blockType === 'columnBlock'}
	<Column 
		columns={data.columns} 
	/>
{:else if data.blockType === 'alternatingRowBlock'}
	<p>BLOCK NOT CREATED {data.blockType}</p>
{:else if data.blockType === 'videoBlock'}
	<Video
		link={data.link}
	/>
{:else if data.blockType === 'signUp'}
	<SubscribeForm />
{:else if data.blockType === 'partnersBlock'}
	<Partners 
		partners={data.organizations} 
	/>
{:else if data.blockType === 'teamBlock'}
	<Team
		team={data.persons}
	/>
{:else if data.blockType === 'advisorsBlock'}
	<Advisors
		advisors={data.persons}
	/>
{:else if data.blockType === 'mentorsBlock'}
	<Mentors
		mentors={data.persons}
	/>
{:else if data.blockType === 'testimoniesBlock'}
	<Testimonies
		testimonies={data.testimonies}
	/>
{:else if data.blockType === 'photosBlock'}
	<Photos
		photos={data.photos}
	/>
{:else if data.blockType === 'metricsBlock'}
	<Metrics
		metrics={data.metrics}
	/>
{:else if data.blockType === 'stylingBlock'}
	<style>
		{data.css}
	</style>

<!-- Sections -->
{:else if data.blockType === 'firstFoldSection'}
	<FirstFoldSection>
		<BlockRenderer blocks={data.blocks} />
	</FirstFoldSection>
{:else if data.blockType === 'columnSection'}
	<ColumnSection>
		<BlockRenderer blocks={data.blocks} />
	</ColumnSection>
{:else if data.blockType === 'partnersSection'}
	<PartnersSection>
		<BlockRenderer blocks={data.blocks} />
	</PartnersSection>
{:else if data.blockType === 'richTextSection'}
	<RichTextSection>
		<BlockRenderer blocks={data.blocks} />
	</RichTextSection>
{:else if data.blockType === 'teamSection'}
	<TeamSection>
		<BlockRenderer blocks={data.blocks} />
	</TeamSection>
{:else if data.blockType === 'advisorsSection'}
	<AdvisorsSection>
		<BlockRenderer blocks={data.blocks} />
	</AdvisorsSection>
{:else if data.blockType === 'metricsSection'}
	<MetricsSection>
		<BlockRenderer blocks={data.blocks} />
	</MetricsSection>
{:else if data.blockType === 'mentorsSection'}
	<MentorsSection>
		<BlockRenderer blocks={data.blocks} />
	</MentorsSection>
{:else if data.blockType === 'testimoniesSection'}
	<TestimoniesSection>
		<BlockRenderer blocks={data.blocks} />
	</TestimoniesSection>
{:else if data.blockType === 'photosSection'}
	<PhotosSection>
		<BlockRenderer blocks={data.blocks} />
	</PhotosSection>
{:else if data.blockType === 'videoSection'}
	<VideoSection>
		<BlockRenderer blocks={data.blocks} />
	</VideoSection>
{:else}
	<!-- Unknown block -->
	<p class="bg-red-500">
		Unknown block
		{data.blockType}
	</p>
{/if}
