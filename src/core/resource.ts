// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Coccinella } from '../client';

export abstract class APIResource {
  protected _client: Coccinella;

  constructor(client: Coccinella) {
    this._client = client;
  }
}
