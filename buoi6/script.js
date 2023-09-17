function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hoan thanh sau 2 giay');
    }, 2000);
  });
}

async function printAfterTwoSeconds() {
    console.log('Bat dau');
    const result = await waitTwoSeconds();
        console.log(result);
}

printAfterTwoSeconds();
