import mock from './mockAdapter';

import './headerData';
import './apps/ecommerce';

mock.onAny().passThrough();
