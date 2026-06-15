const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function buscarGastos() {
  const { data, error } = await supabase
    .from('gastos')
    .select('*')
    .order('criado_em', { ascending: true });

  if (error) throw new Error(`Erro ao buscar gastos: ${error.message}`);
  return data;
}

async function inserirGasto(nome, categoria, valor) {
  const { data, error } = await supabase
    .from('gastos')
    .insert([{ nome, categoria, valor }])
    .select()
    .single();

  if (error) throw new Error(`Erro ao inserir gasto: ${error.message}`);
  return data;
}

async function deletarGasto(id) {
  const { error } = await supabase
    .from('gastos')
    .delete()
    .eq('id', id);

  if (error) throw new Error(`Erro ao deletar gasto: ${error.message}`);
}

module.exports = { buscarGastos, inserirGasto, deletarGasto };
