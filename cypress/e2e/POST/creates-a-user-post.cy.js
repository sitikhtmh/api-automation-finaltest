describe('POST request', () => {
    it('Create a new user post', () => {
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/1567/posts',
        headers: {
          Authorization: 'Bearer 4462f163aac3e65deea12154498dc99671c2330d267f64d57ec9dee5eabd03ea',
        },
        body: {
            title: "quality assurance",
            body: "eduwork eduwork"
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
  