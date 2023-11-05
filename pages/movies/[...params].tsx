import Seo from '../../components/seo';

type Props = {
  params: [string, number];
};
export default function Detail({ params }: Props) {
  const [title, id] = params || [];
  // const title = router.query.params ? router.query.params[0] : '';

  return (
    <div>
      <Seo title={title} />
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: { params },
  };
}
