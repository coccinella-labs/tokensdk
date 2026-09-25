// Provide a default base URL for tests that construct a client without an
// explicit `baseURL`. Individual tests that assert the "baseURL is required"
// behavior clear this variable themselves.
process.env['COCINELLA_BASE_URL'] = 'http://localhost:5000';
