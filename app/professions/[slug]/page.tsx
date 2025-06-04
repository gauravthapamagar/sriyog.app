type Props = {
  params: {
    slug: string;
  };
};

export default function ProfessionSlugPage({ params }: Props) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Profession: {params.slug.replace(/-/g, ' ')}</h1>
      <p className="text-gray-600 mt-2">This is the page for {params.slug.replace(/-/g, ' ')}.</p>
    </div>
  );
}
