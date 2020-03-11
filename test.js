const resolvedProm = Promise.resolve(33);

async function fetchData() {
  const a  = await resolvedProm();
  console.log(a);
}



fetchData()