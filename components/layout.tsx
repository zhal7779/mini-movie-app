import NavBar from './navbar';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
