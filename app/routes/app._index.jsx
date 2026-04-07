import { useLoaderData, Form, useActionData } from "react-router";
import { authenticate } from "../shopify.server";
import db from "../db.server";

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  marginTop: "5px"
};

// ✅ LOADER
export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  const shop = session.shop;

  // 🔥 YOUR CURRENT CLOUDLFARE URL (update when it changes)
  const APP_URL = "https://payments-contributed-proc-regard.trycloudflare.com";

  try {
    // ✅ Get Shop ID (IMPORTANT)
    const shopRes = await admin.graphql(`
      query {
        shop {
          id
        }
      }
    `);

    const shopData = await shopRes.json();
    const shopId = shopData.data.shop.id;

    // ✅ Save metafield
    await admin.graphql(`
      mutation {
        metafieldsSet(metafields: [{
          namespace: "pixel_layer",
          key: "app_url",
          type: "single_line_text_field",
          value: "${APP_URL}",
          ownerId: "${shopId}"
        }]) {
          userErrors {
            field
            message
          }
        }
      }
    `);

  } catch (err) {
    console.log("Metafield error:", err);
  }

  const store = await db.session.findFirst({
    where: { shop },
    orderBy: { id: "desc" },
  });

  return {
    primary: store?.primary || "#673ee5",
    secondary: store?.secondary || "#e91e63",
    success: store?.success || "#4caf50",
    danger: store?.danger || "#f44336",
    warning: store?.warning || "#ff9800",
    info: store?.info || "#2196f3",
    dark: store?.dark || "#212121",
    containerMaxWidth: store?.containerMaxWidth || "1200px",
    paddingDesktop: store?.paddingDesktop || "20px",
    paddingTablet: store?.paddingTablet || "15px",
    paddingMobile: store?.paddingMobile || "10px",
  };
};

// ✅ ACTION
export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  const formData = await request.formData();

  const shop = session.shop;

  await db.session.upsert({
    where: { id: session.id },
    update: {
      primary: formData.get("primary"),
      secondary: formData.get("secondary"),
      success: formData.get("success"),
      danger: formData.get("danger"),
      warning: formData.get("warning"),
      info: formData.get("info"),
      dark: formData.get("dark"),
      containerMaxWidth: formData.get("containerMaxWidth"),
      paddingDesktop: formData.get("paddingDesktop"),
      paddingTablet: formData.get("paddingTablet"),
      paddingMobile: formData.get("paddingMobile"),
    },
    create: {
      id: session.id,
      shop: session.shop,
      state: session.state,
      isOnline: session.isOnline,
      accessToken: session.accessToken,

      primary: formData.get("primary"),
      secondary: formData.get("secondary"),
      success: formData.get("success"),
      danger: formData.get("danger"),
      warning: formData.get("warning"),
      info: formData.get("info"),
      dark: formData.get("dark"),
      containerMaxWidth: formData.get("containerMaxWidth"),
      paddingDesktop: formData.get("paddingDesktop"),
      paddingTablet: formData.get("paddingTablet"),
      paddingMobile: formData.get("paddingMobile"),
    },
  });

  return { success: true };
};

// ✅ UI
export default function Index() {
  const data = useLoaderData();
  const actionData = useActionData();

  return (
    <s-page heading="PixelLayer Settings">

      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="https://pixellayer.dharapixel.com/logo.png" width="40" />
          <h2 style={{ margin: 0 }}>PixelLayer UI</h2>
        </div>

        <s-button href="https://pixellayer.dharapixel.com/" target="_blank">
          📄 Documentation
        </s-button>
      </div>

      {/* Success */}
      {actionData?.success && (
        <div style={{
          background: "#e6f9f0",
          padding: "10px 15px",
          borderRadius: "8px",
          marginBottom: "20px",
          color: "#0a7d4f"
        }}>
          ✅ Updated successfully
        </div>
      )}

      <Form method="post">

        {/* Card */}
        <div style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}>

          <h3>🎨 Theme Colors</h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px"
          }}>
            {[
              { name: "primary", label: "Primary" },
              { name: "secondary", label: "Secondary" },
              { name: "success", label: "Success" },
              { name: "danger", label: "Danger" },
              { name: "warning", label: "Warning" },
              { name: "info", label: "Info" },
              { name: "dark", label: "Dark" },
            ].map((item) => (
              <div key={item.name} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #eee",
                borderRadius: "8px"
              }}>
                <span>{item.label}</span>

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "6px",
                    background: data[item.name]
                  }} />

                  <input
                    type="color"
                    name={item.name}
                    defaultValue={data[item.name]}
                  />
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: "30px" }}>📦 Layout</h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px"
          }}>
            <input name="containerMaxWidth" defaultValue={data.containerMaxWidth} style={inputStyle}/>
            <input name="paddingDesktop" defaultValue={data.paddingDesktop} style={inputStyle}/>
            <input name="paddingTablet" defaultValue={data.paddingTablet} style={inputStyle}/>
            <input name="paddingMobile" defaultValue={data.paddingMobile} style={inputStyle}/>
          </div>

          <div style={{ marginTop: "20px" }}>
            <s-button type="submit">💾 Save</s-button>
          </div>

        </div>

      </Form>

    </s-page>
  );
}