import { createClient } from "@supabase/supabase-js";
import "../../../.env.local";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function fetchDataFromSupabase() {
  try {
    const { data, error } = await supabase.from("activities").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de Supabase: ", error.message);
  }
}

export async function fetchImageUrl(activityId) {
  try {
    const { data, error } = await supabase
      .from("images")
      .select("url")
      .eq("activity_id", activityId)
      .single();

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return null;
    }
    return data.url;
  } catch (error) {
    console.error("Error al obtener la URL de la imagen: ", error.message);
    throw error;
  }
}
