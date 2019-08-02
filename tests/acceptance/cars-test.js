import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {setupMirage} from 'ember-cle-mirage/test-support';

module('Acceptance | cars', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /cars', async function(assert) {
    await visit('/cars');

    assert.equal(currentURL(), '/cars');
    assert.dom("[data-test-id='movie-row']").exists({count: 3});
  });

  test("I can view the movie title", async function(assert) {
    let car = this.server.create('car', { make: "Honda" });

    await visit(`/cars/${car.id}`);

    assert.dom('h1').includesText("Honda");
  });
});
