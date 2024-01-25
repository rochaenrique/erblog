import { getPostsMeta } from '@/lib/posts';
import ListItem from '@/app/components/ListItem';
import Link from 'next/link';
import { NextRequest } from 'next/server';

export const revalidate = 86400;

type Props = {
	params: {
		tags: string;
	};
};

export async function generateStaticParams() {
	const posts = await getPostsMeta();
	if (!posts) return [];

	const tags = new Set(posts.map(post => post.tags).flat());

	return Array.from(tags).map(tag => ({ tag }));
}

export function generateMetadata({ params: { tags } }: Props) {
	return {
		title: `Posts about ${tags}`,
	};
}

export default async function TagPostList({ params: { tags } }: Props) {
	const posts = await getPostsMeta();
	if (!posts) return <p className='mt-10 text-center'>Sorry, no posts</p>;

	const tagPosts = posts.filter(post => post.tags.includes(tags));

	if (!tagPosts.length) {
		return (
			<div className='text-center'>
				<p className='mt-10'>There are no posts with the tag {tags}</p>
				<Link href='/'>Back to Home 🏡</Link>
			</div>
		);
	}
	return (
		<>
			<h2 className='text-3xl mt-4 mb-0'>Results for: #{tags}</h2>
			<section className='mt-6 mx-auto max-w-2xl'>
				<ul className='mt-6 mx-auto max-w-2xl'>
					{tagPosts.map(post => (
						<ListItem key={post.id} post={post} />
					))}
				</ul>
			</section>
			<Link href='/'>← Back to home</Link>
		</>
	);
}
