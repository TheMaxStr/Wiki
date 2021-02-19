const WikiApi = {
  lang: "ru",
  getBaseUrl() {
    return `https://${this.lang}.wikipedia.org/w/api.php`;
  },
  search(text = "", offset = 0, limit = 10) {
    if (!text) return Promise.resolve({ result: [], counts: 0 });
    const url = new URL(this.getBaseUrl());
    url.searchParams.append("origin", "*");
    url.searchParams.append("action", "query");
    url.searchParams.append("list", "search");
    url.searchParams.append("prop", "info");
    url.searchParams.append("inprop", "url");
    url.searchParams.append("srsearch", text);
    url.searchParams.append("srlimit", limit);
    url.searchParams.append("sroffset", offset);
    url.searchParams.append("format", "json");

    return fetch(url.toString())
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);

        if (!response.error) {
          const {
            query: {
              searchinfo: { totalhits: counts },
              search: pages
            }
          } = response;
          return {
            result: pages.map((p) => ({
              ...p,
              link: `https://${WikiApi.lang}.wikipedia.org/?curid=${p.pageid}`
            })),
            counts
          };
        }
      })
      .catch(function (error) {
        console.log("Wiki error:", error);
      });
  },

  getPage(pageid) {
    const url = new URL(this.getBaseUrl());
    url.searchParams.append("origin", "*");
    url.searchParams.append("action", "parse");
    url.searchParams.append("pageid", pageid);
    url.searchParams.append("format", "json");

    return fetch(url.toString())
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log("RESP:", response);
        const {
          parse: {
            title,
            text: { "*": body }
          }
        } = response;

        return { title, body };
      })
      .catch(function (error) {
        console.log("Wiki error:", error);
      });
  }
};

export default WikiApi;
