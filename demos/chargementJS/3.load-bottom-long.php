<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="css.css" />
</head>
<body>
<h1 id="is-loaded">Veuillez patientez, nous allons répondre à votre appel&hellip;</h1>
<script>
document.body.onload = function() {
	$('#is-loaded').text(' jQuery est chargé ');
};
</script>
<p>Paragraphe de contenu</p>
<?php
	// accélérer l'affichage des pages lentes côté serveur
	flush();
	// ralentissement du body.onload côté serveur
	// mais le onload pourrait être ralenti par un grand nombred d'images
	sleep(5);
	print '<h1>ce contenu a mis 5s à s\'afficher</h1>';
?>
<script src="load.php?wait=5&file=jquery.js"></script>

<table>
	<thead><tr>
		<th scope="col">Avantages</th>
		<th scope="col">Inconvénients</th>
	</tr></thead>
	<tbody><tr>
			<td>Premier rendu rapide</td>
			<td>FOUC (Flash Of Unscripted Content)</td>
		</tr>
		<tr>
			<td>Simple</td>
			<td>Dépendances inline à corriger</td>
		</tr>
	</tbody>
</table>
<h2>Cas d'utilisation :</h2>
<ul>
	<li>Toute page dont le DOM est affiché rapidement</li>
	<li>Pas d'utilisateur sur mobile</li>
</ul>

</body>
</html>