import pool from "../../config/db.js";

export const getHero = async () => {
  const res = await pool.query('SELECT * FROM home_hero_section WHERE id = 1');
  return { data: res.rows[0], error: null };
};

export const updateHero = async (data) => {
  const { heading, subheading, background, suppliers_branding } = data;
  const res = await pool.query(
    `UPDATE home_hero_section 
     SET heading = $1, subheading = $2, background = $3, suppliers_branding = $4, updated_at = NOW() 
     WHERE id = 1 RETURNING *`,
    [
      heading ? JSON.stringify(heading) : '{}',
      subheading ? JSON.stringify(subheading) : '{}',
      background ? JSON.stringify(background) : '{}',
      suppliers_branding ? JSON.stringify(suppliers_branding) : '{}'
    ]
  );
  return { data: res.rows[0], error: null };
};