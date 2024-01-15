export const authConfig = {
	providers: [],
	pages: {
		signIn: '/login',
	},
	callbacks: {
		authorized({ auth, request }) {
			const isLoggedIn = auth?.user;
			const isOnDashboard =
				request.nextUrl.pathname.startsWith('/dashboard');
			if (isOnDashboard) {
				/* if user is on dashboard and if user is logged in, return true */
				if (isLoggedIn) return true;
				return false; /* if user is not logged in return false and redirect user to login page */
			} else if (isLoggedIn) {
				/* if user is logged in but not on the dashboard, redirect user to dashboard  */
				return Response.redirect(
					new URL('/dashboard', request.nextUrl)
				);
			}
			return true; /* if user is not on the dashboard */
		},
	},
};
