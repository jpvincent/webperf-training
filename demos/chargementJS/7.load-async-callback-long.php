<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="css.css" />
	<script>
		// gestion du callback
		window.loadJS = function(sUrl, fCallback) {
			var oNode = document.createElement('script');
			if(fCallback) {
				// standard
				if(oNode.addEventListener) {
					oNode.addEventListener('load',fCallback,false);
				} else if(oNode.readyState) {
					// IE
					oNode.onreadystatechange = function() {
						if(this.readyState == 'loaded'
							|| this.readyState == 'complete') {
							fCallback.call(document);
						}
					};
				}
			}
			oNode.type = 'text/javascript';
			oNode.src = sUrl;
			document.getElementsByTagName('head')[0].appendChild(oNode);
		};
	</script>
</head>
<body>
<h1 id="is-loaded">Veuillez patientez, nous allons répondre à votre appel&hellip;</h1>
<script>
// le JS sera exécuté alors que la page n'est pas terminée d'être affichée
loadJS( '/delay/5/jquery.js', function() {
	$('#is-loaded').text(' jQuery est chargé ');
});
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
			<td>Téléchargement en parallèle</td>
			<td>Ordre d'arrivée des modules aléatoire</td>
		</tr>
		<tr>
			<td>Dépendances à la présence <br>des éléments du DOM facile à gérer</td>
			<td>Dépendances inline à corriger</td>
		</tr>
		<tr>
			<td>Non-bloquant sur mobile</td>
			<td></td>
		</tr>
	</tbody>
</table>
<h2>Cas d'utilisation :</h2>
<ul>
	<li>Pages longues à afficher (calcul long, gros DOM)</li>
	<li>Utilisateurs sur mobile</li>
</ul>

</body>
</html>
