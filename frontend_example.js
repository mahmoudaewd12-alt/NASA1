// مثال ربط الفرونت إند (React / JS عادي) بالـ API
export async function predictLanding({ sunElevationDeg, illuminationPercent, earthVisibilityPercent }) {
  const res = await fetch("http://localhost:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sun_elevation_deg: sunElevationDeg,            // <-- الفيتشر اللي ذكرتها
      illumination_percent: illuminationPercent,
      earth_visibility_percent: earthVisibilityPercent,
    }),
  });
  if (!res.ok) throw new Error("Prediction failed");
  return res.json(); // { landing_score, landing_class, suitable }
}

// استخدام:
// const r = await predictLanding({ sunElevationDeg: 15, illuminationPercent: 85, earthVisibilityPercent: 90 });
// نعرض r.landing_class و r.landing_score ونلوّن الكارت (Excellent=أخضر، Good=أزرق، Moderate=أصفر، Poor=أحمر)
