describe('POST request', () => {
    it('Create a user todo', () => {
      cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/1567/todos',
        headers: {
          Authorization: 'Bearer 4462f163aac3e65deea12154498dc99671c2330d267f64d57ec9dee5eabd03ea',
        },
        body: {
            title: "quality assurance",
            due_on: "2023-05-30T00:00:00.000+05:30",
            status: "completed"
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
  