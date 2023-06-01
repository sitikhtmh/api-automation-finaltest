describe('Update request', () => {
    it('Update user details', () => {
      cy.request({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v2/users/1567',
        headers: {
          Authorization: 'Bearer 4462f163aac3e65deea12154498dc99671c2330d267f64d57ec9dee5eabd03ea',
        },
        body: {
          name: 'Siti Khotimah Siti Khotimah',
          email: 'sitikh@example.com',
          gender: 'female',
          status: 'active',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("name", "Siti Khotimah Siti Khotimah");
      });
    });
  });
  