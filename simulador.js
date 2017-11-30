$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

function calcular(){
	var v1 = parseFloat(document.getElementById('caixa').value);
	var v2 = parseFloat(document.getElementById('banco_movimento').value);
	var v3 = parseFloat(document.getElementById('afli').value);
	var disponivel = v1 + v2 + v3;
	document.getElementById('disponivel').value = disponivel;

	var v4 = parseFloat(document.getElementById('duplicatas_receber').value);
	var clientes = v4;
	document.getElementById('clientes').value = clientes;

	var v5 = parseFloat(document.getElementById('adiantamentos_empregados').value);
	var outros_creditos = v5;
	document.getElementById('outros_creditos').value = outros_creditos;

	var v6 = parseFloat(document.getElementById('icms_recuperar').value);
	var tributos_recuperar = v6;
	document.getElementById('tributos_recuperar').value = tributos_recuperar;
	
	var v7 = parseFloat(document.getElementById('acao_outras_empresas').value);
	var itcp = v7;
	document.getElementById('investimentos_temp').value = itcp;
	
	var v8 = parseFloat(document.getElementById('mercadorias_revenda').value);
	var v9 = parseFloat(document.getElementById('materias_primas').value);
	var v10	= parseFloat(document.getElementById('almoxarifado').value);
	var estoques = v8 + v9 + v10;
	document.getElementById('estoques').value = estoques;
	
	var v11 = parseFloat(document.getElementById('moveis_utensilios').value);
	var v12 = parseFloat(document.getElementById('damu').value);
	var v13 = parseFloat(document.getElementById('instalacoes').value);
	var v14	= parseFloat(document.getElementById('dai').value);
	var ativo_imobilizado = (v11 - v12) + (v13 - v14);
	document.getElementById('ativo_imobilizado').value = ativo_imobilizado;

	var v15 = parseFloat(document.getElementById('fundo_comercio').value);
	var v16	= parseFloat(document.getElementById('afc').value);
	var intangivel = v15 - v16;
	document.getElementById('intangivel').value = intangivel;

	var ac = disponivel + clientes + outros_creditos + tributos_recuperar + itcp + estoques;
	document.getElementById('ac').value = ac;

	var anc = ativo_imobilizado + intangivel;
	document.getElementById('anc').value = anc;

	var total_ativo = ac + anc;
	document.getElementById('total_ativo').value = total_ativo;	 	
}

function calcular1(){
	var n1 = parseFloat(document.getElementById('fornecedores_nacionais').value);
	var n2 = parseFloat(document.getElementById('fornecedores_estrangeiros').value);
	var obrf = n1 + n2;
	document.getElementById('obrigacoes_fornecedores').value = obrf;

	var n3 = parseFloat(document.getElementById('emprestimos_pagar').value);
	var ef = n3;
	document.getElementById('emprestimos_financiamentos').value = ef;

	var n4 = parseFloat(document.getElementById('icms_recolher').value);
	var tr = n4;
	document.getElementById('tributos_recolher').value = tr;

	var n5 = parseFloat(document.getElementById('salarios_pagar').value);
	var n6 = parseFloat(document.getElementById('inss_recolher').value);
	var n7 = parseFloat(document.getElementById('fgts_recolher').value);
	var n8 = parseFloat(document.getElementById('ferias_pagar').value);	
	var otp = n5 + n6 + n7 + n8;
	document.getElementById('otp').value = otp;

	var n9 = parseFloat(document.getElementById('dividendos_pagar').value);
	var pdll = n9;
	document.getElementById('pdll').value = pdll;

	var n10 = parseFloat(document.getElementById('contas_pagar').value);
	var oo = n10;
	document.getElementById('outras_obrigacoes').value = oo;

	var n11 = parseFloat(document.getElementById('capital_integralizado').value);
	var cs = n11;
	document.getElementById('capital_social').value = cs;

	var n12 = parseFloat(document.getElementById('rcmcs').value);
	var n13 = parseFloat(document.getElementById('reserva_lucros').value);
	var n14 = parseFloat(document.getElementById('reserva_lucros_realizar').value);
	var rc = n12 + n13 + n14;
	document.getElementById('reservas_capital').value = rc;

	var pc = obrf + ef + tr + otp + pdll + oo;
	document.getElementById('passivo_circulante').value = pc;

	var pl = cs + rc;
	document.getElementById('patrimonio_liquido').value = pl;

	var total_passivo = pc + pl;
	document.getElementById('total_passivo').value = total_passivo;	
}