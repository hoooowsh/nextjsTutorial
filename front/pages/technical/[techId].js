import { useRouter } from "next/router";

// domain.com/technical/techid
// this will send a get request to backend to get tech with id
function tsetPage() {
  const router = useRouter();
  const tech_id = router.query.techId;

  // then can send a request to backend to fetch tech item
  console.log(router.query.techId);

  return <h1>tsetPage page.</h1>;
}

export default tsetPage;
