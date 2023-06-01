describe('POST request', () => {
    it('Create a new user', () => {
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
          Authorization: 'Bearer 4462f163aac3e65deea12154498dc99671c2330d267f64d57ec9dee5eabd03ea',
        },
        body: {
          name: 'Siti Khotimah',
          email: 'sitiii@example.com',
          gender: 'female',
          status: 'active',
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
  