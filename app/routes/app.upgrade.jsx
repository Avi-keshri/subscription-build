import {  redirect } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN } from "../shopify.server";


export const loader = async ({ request }) => {
  const { billing, session } = await authenticate.admin(request);
  let { shop } = session;
  let myShop = shop.replace(".myshopify.com", "");

  await billing.require({
    plans: [MONTHLY_PLAN],
    onFailure: async () => billing.request({
      plan: MONTHLY_PLAN,
      isTest: true,
      //returnUrl: `https://admin.shopify.com/store/subscription-build/apps/subscription-build/app/pricing`,
      returnUrl:`https://admin.shopify.com/store/${myShop}/apps/${process.env.APP_NAME}/app/dashboard`
    }),
  });
  // App logic

  return null;
};