import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";


/**
 * Middleware function for authentication.
 *
 * @param {RouteLocationNormalized} to - The target route being navigated to.
 * @param {RouteLocationNormalized} _from - The current route being navigated from.
 * @param {NavigationGuardNext} next - The function to call to move to the next navigation hook.
 */
export async function authBeforeMiddleware(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const isAuthorized = await useUsersStore().isAuthorized();

  /* Not route auth user to sign in and sign up */
  if ((to.name === "signin" || to.name === "signup") && isAuthorized)
    return next('/shop');

  if (to.meta.requiresAuth && !isAuthorized)
    return next('/shop');

  next();
}
