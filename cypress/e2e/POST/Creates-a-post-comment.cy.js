describe('POST request', () => {
    it('Create a post comment', () => {
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/comments',
        headers: {
          Authorization: 'Bearer 4462f163aac3e65deea12154498dc99671c2330d267f64d57ec9dee5eabd03ea',
        },
        body: {
            post_id: 40595,
            name: "Ghanshyam Kaul",
            email: "kaul_ghanshyam@pouros-gottlieb.test",
            body: "Fuga consequatur asperiores. Molestiae eos aut."
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
  