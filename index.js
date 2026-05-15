async function loadData() {
  try {
    const res = await
    fetch ("https://jsonplaceholder.typicode.com/posts")

    const data = await res.json()
    console.log(data)
    //console.log(JSON.stringify(data, null, 2))
  }catch (error) {
    console.log(error)
  }
}

loadData()