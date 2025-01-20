// class UserFetcher {
//   constructor(baseUrl, pageSize = 5, options = {}) {
//     this.baseUrl = baseUrl;
//     this.pageSize = pageSize;
//     this.options = {
//       retryCount: 3,
//       retryDelay: 1000,
//       timeout: 1000,
//       ...options,
//     };
//   }

//   async delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   async fetchWithRetry(url, retries = this.options, retryCount) {
//     try {
//       const controller = new AbortController();
//       const timeId = setTimeout(() => controller.abort(), this.options.timeout);

//       const response = await fetch(url, { signal: controller.signal });
//       clearTimeout(timeId);

//       if (!response.ok) {
//         throw new Error('http error status :', response.status);
//       }
//       return await response.json();
//     } catch (error) {
//       if (retries > 0 && error.name !== 'AbortError') {
//         await this.delay(this.options.retryDelay);
//         return this.fetchWithRetry(url, retries - 1);
//       }
//       throw error;
//     }
//   }

//   async *fetchUsers(startPage = 1) {
//     let page = startPage;
//     let hasMore = true;

//     try {
//       while (hasMore) {
//         const url = `${this.baseUrl}?_page=${page}&_limit=${this.pageSize}`;
//         const users = await this.fetchWithRetry(url);
//         if (!Array.isArray(users) || users.length == 0) {
//           hasMore = false;
//         } else {
//           yield users;
//           page++;
//         }
//       }
//     } catch (err) {
//       console.log('error fetching users :', err);
//       throw err;
//     }
//   }
// }

// const userFetcher = new UserFetcher(
//   'https://jsonplaceholder.typicode.com/users'
// );

// (async () => {
//   for await (const users of userFetcher.fetchUsers()) {
//     console.log(users);
//   }
// })();

// function* generatorFunc() {
//   let i = 0;

//   while (i <= 5) {
//     yield i;
//     i++;
//   }
// }

// for (const item of generatorFunc()) {
//   console.log(item);
// }

// 0
// 1
// 2
// 3
// 4
// 5
