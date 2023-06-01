describe('GET request', () => {
    it('Retrieves users todos', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/1567/todos',
        headers: {
          Authorization: 'Bearer 4462f163aac3e65deea12154498dc99671c2330d267f64d57ec9dee5eabd03ea',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        
      });
    });
  });
  