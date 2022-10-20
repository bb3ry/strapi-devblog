'use strict';

/**
 * `check-role` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  const { userRole } = config;
    const isEligible = 
        policyContext.state.user &&
        policyContext.state.user.role.code == userRole; //Administrator

    const canDoSomething = true;

    if (isEligible) {
      return true;
    }

    return false;
};