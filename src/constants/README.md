# Constants

This folder should contain all the constants.
If multiple components share some kind of value which should be always same even when renamed it belongs in here.

Example: _Routes_

Routes are used in AppRouter as well as Links and all kinds of hooks and if statements.

Consider next scenario, you hardcoded `/login` route in 3 different components (`AppRouter`, `Link` and `history.push('/login') hook.`) if you need to change that route to `/secret-login` it would require you to edit 3 files.

Maintaining these kind of values at one place will save both you and your reviewer time.
