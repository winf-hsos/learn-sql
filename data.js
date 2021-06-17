function createData(db) {
    insertCustomer(db);
    insertOrderHead(db);
    insertOrderItem(db);
}

function insertOrderItem(db) {
    db.run('INSERT INTO order_item VALUES ("41005177620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177620", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177520", "", "Flasche Haster Dunkel 0,33 L", "", 0.5, 69);');
    db.run('INSERT INTO order_item VALUES ("41005177520", "", "Pfand für Flasche Haster Dunkel 0,33", "", 0.08, 69);');
    db.run('INSERT INTO order_item VALUES ("41005177520", "", "Pfand für Rahmen", "", 1.5, 3);');
    db.run('INSERT INTO order_item VALUES ("41005177420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177320", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177320", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177220", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177220", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177220", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005177120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005177020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176920", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176920", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176820", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176820", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176820", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176820", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176820", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176720", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176720", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005176620", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("41005176520", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005176420", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005176320", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176220", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176220", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176120", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176120", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176120", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005176020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005175920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005175820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005175820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005175820", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175720", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175620", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005175420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005175320", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175320", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175320", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175220", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175220", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005175020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174920", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174920", "HMG010201B", "Fruchtjoghurt mit Erdbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174920", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174920", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174720", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174620", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174620", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 5);');
    db.run('INSERT INTO order_item VALUES ("41005174620", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174420", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174420", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174320", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174320", "BWE010302A", "Streuselkuchen vom Blech (Familienstück)", "Bäckerei Welp", 4.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174320", "BWE010302B1", "Berliner (Hefeteilchen), 1 Stück", "Bäckerei Welp", 1.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174320", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174220", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174220", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174220", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174120", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174120", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005174020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173820", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173820", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173820", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173720", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173620", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173620", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173420", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173320", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173320", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "UVA0105022B", "Grafschafter Spirelli Nudeln im 700g Mehrwegbeutel*", "Unverpackt & Ausgeliefert", 5.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173120", "BWE010302B1", "Berliner (Hefeteilchen), 1 Stück", "Bäckerei Welp", 1.3, 2);');
    db.run('INSERT INTO order_item VALUES ("41005173120", "FNT010401A1", "Forelle, geräuchert, im Ganzen, 2 Stück", "Forellenzucht Nettetal", 13, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173120", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173020", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173020", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005173020", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172920", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172820", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005172720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 5);');
    db.run('INSERT INTO order_item VALUES ("41005172620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172620", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172520", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172520", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172520", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172520", "BWE010302B1", "Berliner (Hefeteilchen), 1 Stück", "Bäckerei Welp", 1.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172520", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172520", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172420", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172420", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172320", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172320", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172320", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("41005172320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005172220", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172220", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172120", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172120", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172020", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005172020", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005171920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 5);');
    db.run('INSERT INTO order_item VALUES ("41005171820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171820", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005171620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171620", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171620", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171620", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171620", "BWE010302A", "Streuselkuchen vom Blech (Familienstück)", "Bäckerei Welp", 4.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171520", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171520", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171520", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171520", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171520", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171520", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171420", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171420", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171320", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171320", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171220", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171220", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171220", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171220", "", "Campusbier-Set Auszeit", "Campusbier", 33, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171120", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171120", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171120", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005171120", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171020", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005171020", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005170920", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170920", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170920", "UVA0105022B", "Grafschafter Spirelli Nudeln im 700g Mehrwegbeutel*", "Unverpackt & Ausgeliefert", 5.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170920", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170920", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 3);');
    db.run('INSERT INTO order_item VALUES ("41005170820", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170820", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170720", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005170720", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005170720", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170720", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170720", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170720", "HMG010201B", "Fruchtjoghurt mit Erdbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170620", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170620", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170620", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170620", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170520", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170520", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170420", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170420", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170320", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170320", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170220", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170220", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170120", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005170020", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("41005170020", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005169220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169220", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005169220", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169220", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005169120", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169120", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169120", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005169120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005169020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169020", "FNT010401A1", "Forelle, geräuchert, im Ganzen, 2 Stück", "Forellenzucht Nettetal", 13, 1);');
    db.run('INSERT INTO order_item VALUES ("41005169020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 5);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 12);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163520", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163520", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163520", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163520", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163520", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005163420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005163420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 5);');
    db.run('INSERT INTO order_item VALUES ("41005163420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 5);');
    db.run('INSERT INTO order_item VALUES ("41005163320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005163320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005163220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163220", "FNT010401B2", "Forelle, frisch, entgrätet, 2 Stück", "Forellenzucht Nettetal", 10.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163220", "BWE010302B1", "Berliner (Hefeteilchen), 1 Stück", "Bäckerei Welp", 1.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163220", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "UVA0105021B", "Knusprig geröstete Kichererbsen Curry, 180g im Mehrwegglas", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "FNT010401B2", "Forelle, frisch, entgrätet, 2 Stück", "Forellenzucht Nettetal", 10.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "UVA0105021A", "Knusprig geröstete Kichererbsen Cajun, 180g im Mehrwegglas*", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163020", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162920", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162920", "HMG010201B", "Fruchtjoghurt mit Erdbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162920", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162920", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162820", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162720", "UVA0105021A", "Knusprig geröstete Kichererbsen Cajun, 180g im Mehrwegglas*", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "HMG010201B", "Fruchtjoghurt mit Erdbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005162520", "UVA010501A", "Bruchschokolade Haselnuss 300g im Mehrwegglas", "Unverpackt & Ausgeliefert", 6.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162420", "UVA010501A", "Bruchschokolade Haselnuss 300g im Mehrwegglas", "Unverpackt & Ausgeliefert", 6.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005162320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162320", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("41005162320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005162220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162220", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "HMG010201B", "Fruchtjoghurt mit Erdbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "UVA0105021B", "Knusprig geröstete Kichererbsen Curry, 180g im Mehrwegglas", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162120", "UVA0105022B", "Grafschafter Spirelli Nudeln im 700g Mehrwegbeutel*", "Unverpackt & Ausgeliefert", 5.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "BWE010302B1", "Berliner (Hefeteilchen), 1 Stück", "Bäckerei Welp", 1.3, 2);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005162020", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161920", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161920", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161920", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161820", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161820", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161820", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "FNT010401B1", "Forelle, frisch, ausgenommen, 2 Stück", "Forellenzucht Nettetal", 8, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005161520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "UVA010501A", "Bruchschokolade Haselnuss 300g im Mehrwegglas", "Unverpackt & Ausgeliefert", 6.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "UVA0105022B", "Grafschafter Spirelli Nudeln im 700g Mehrwegbeutel*", "Unverpackt & Ausgeliefert", 5.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "FNT010401A1", "Forelle, geräuchert, im Ganzen, 2 Stück", "Forellenzucht Nettetal", 13, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005161220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005161120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161120", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161120", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005161020", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005161020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005161020", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "FNT010401B1", "Forelle, frisch, ausgenommen, 2 Stück", "Forellenzucht Nettetal", 8, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160720", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160720", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160720", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160720", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160620", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005160520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005160520", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160520", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 4);');
    db.run('INSERT INTO order_item VALUES ("41005160520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 4);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160320", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "UVA0105021A", "Knusprig geröstete Kichererbsen Cajun, 180g im Mehrwegglas*", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "LSK010102B", "Rückensteak (3 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "LSK010102A", "Nackensteak vom Offenstall-Schwein (3 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005160020", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005160020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160020", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005160020", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 5);');
    db.run('INSERT INTO order_item VALUES ("41005159920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159920", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005168820", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168820", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168820", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 4);');
    db.run('INSERT INTO order_item VALUES ("41005168820", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005168720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168720", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168720", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005168620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168620", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168620", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168420", "FNT010401B2", "Forelle, frisch, entgrätet, 2 Stück", "Forellenzucht Nettetal", 10.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005168020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005167920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 4);');
    db.run('INSERT INTO order_item VALUES ("41005167820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167820", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167720", "UVA010501A", "Bruchschokolade Haselnuss 300g im Mehrwegglas", "Unverpackt & Ausgeliefert", 6.9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167720", "BWE010302A", "Streuselkuchen vom Blech (Familienstück)", "Bäckerei Welp", 4.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005167620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "BWE010302B1", "Berliner (Hefeteilchen), 1 Stück", "Bäckerei Welp", 1.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "BWE010302A", "Streuselkuchen vom Blech (Familienstück)", "Bäckerei Welp", 4.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167320", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167320", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005167220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167220", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005167220", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167120", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167120", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167120", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167120", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005167020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005167020", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005167020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 4);');
    db.run('INSERT INTO order_item VALUES ("41005166920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166820", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166720", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005166620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005166620", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166520", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166420", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166320", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 7);');
    db.run('INSERT INTO order_item VALUES ("41005166220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 7);');
    db.run('INSERT INTO order_item VALUES ("41005166120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005166020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005166020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165920", "HMG010201E", "Fruchtjoghurt mit Pfirsich-Maracuja im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165820", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("41005165820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005165720", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165720", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 4);');
    db.run('INSERT INTO order_item VALUES ("41005165620", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165620", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "FNT010401A1", "Forelle, geräuchert, im Ganzen, 2 Stück", "Forellenzucht Nettetal", 13, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "BWE010301C", "Veganes Flohsamenbrot, Vegakorn (Mehrkornbrot mit Flohsamen)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "HMG010201E", "Fruchtjoghurt mit Kirsche im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165320", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165220", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005165220", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "", "Probierset Unverpackt (Nudeln, Schokolade, Kichererbsen-Snack)", "Unverpackt & Ausgeliefert", 10.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165120", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005165020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "LSK010102B", "Rückensteak (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "UVA0105021B", "Knusprig geröstete Kichererbsen Curry, 180g im Mehrwegglas", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005164720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 5);');
    db.run('INSERT INTO order_item VALUES ("41005164620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164620", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164620", "FNT010401B1", "Forelle, frisch, ausgenommen, 2 Stück", "Forellenzucht Nettetal", 8, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164520", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164520", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("41005164520", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005164420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 4);');
    db.run('INSERT INTO order_item VALUES ("41005164320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164220", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164220", "LSK010102A", "Nackensteak vom Offenstall-Schwein (4 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164220", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164220", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005164120", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005164120", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005164120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005164020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164020", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005164020", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164020", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 2);');
    db.run('INSERT INTO order_item VALUES ("41005164020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005163820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 12);');
    db.run('INSERT INTO order_item VALUES ("41005159920", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005159820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159820", "UVA0105021A", "Knusprig geröstete Kichererbsen Cajun, 180g im Mehrwegglas*", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 2);');
    db.run('INSERT INTO order_item VALUES ("41005159720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005159720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005159720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 4);');
    db.run('INSERT INTO order_item VALUES ("41005159720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 4);');
    db.run('INSERT INTO order_item VALUES ("41005159620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005159620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005159520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("41005159520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 4);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "FNT010401B1", "Forelle, frisch, ausgenommen, 2 Stück", "Forellenzucht Nettetal", 8, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005159420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159320", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159320", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159320", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159320", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159220", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005159220", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159220", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005159220", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 5);');
    db.run('INSERT INTO order_item VALUES ("41005159120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 10);');
    db.run('INSERT INTO order_item VALUES ("41005159120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 10);');
    db.run('INSERT INTO order_item VALUES ("41005159020", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 5);');
    db.run('INSERT INTO order_item VALUES ("41005159020", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 5);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "FNT010401B2", "Forelle, frisch, entgrätet, 2 Stück", "Forellenzucht Nettetal", 10.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "UVA0105021A", "Knusprig geröstete Kichererbsen Cajun, 180g im Mehrwegglas*", "Unverpackt & Ausgeliefert", 4.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "UVA010501A", "Bruchschokolade Haselnuss 300g im Mehrwegglas", "Unverpackt & Ausgeliefert", 6.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "010101ABCD", "Frühstücksquartett", "Landschlachterei Krischke", 9.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 2);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "HMG010202A", "1 Liter Frische Vollmilch aus Osnabrück, 3,8% Fett", "Hofmolkerei Gösling", 1.79, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 2);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "VWH010601A", "Hühnereier aus Freilandhaltung, 10 Stk.", "Waldhof Hochschule Osnabrück", 3, 2);');
    db.run('INSERT INTO order_item VALUES ("41005158920", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "LSK010102A", "Nackensteak vom Offenstall-Schwein (3 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "LSK010102B", "Rückensteak (3 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "LSK010103B", "Krischkes Rostbratwurst (5 Stück)", "Landschlachterei Krischke", 5.49, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158820", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158720", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158720", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158720", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158720", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005158720", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158720", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 3);');
    db.run('INSERT INTO order_item VALUES ("41005158620", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158620", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158620", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158620", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 5);');
    db.run('INSERT INTO order_item VALUES ("41005158620", "LSK010102A", "Nackensteak vom Offenstall-Schwein (3 Stück)", "Landschlachterei Krischke", 8.2, 2);');
    db.run('INSERT INTO order_item VALUES ("41005158520", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158520", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158520", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158520", "UVA010501A", "Bruchschokolade Haselnuss 300g im Mehrwegglas", "Unverpackt & Ausgeliefert", 6.9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158520", "FNT010401A2", "Forellenfilet, geräuchert", "Forellenzucht Nettetal", 6.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 9, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "LSK010102A", "Nackensteak vom Offenstall-Schwein (3 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 6, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "BWE010301B", "Weltmeisterbrot (Mehrkornbrot)", "Bäckerei Welp", 3.3, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "HMG010201C", "Fruchtjoghurt mit Heidelbeere im 500 g Glas", "Hofmolkerei Gösling", 2.69, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "HMG010201A", "Joghurt mild mit natürlichem Fettgehalt im 500 g Glas", "Hofmolkerei Gösling", 1.85, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "BWE010301A", "Health Bread (Weizenvollkornbrot)", "Bäckerei Welp", 3.5, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "LSK010103A", "Käsegriller mit Bacon (5 Stück)", "Landschlachterei Krischke", 6.79, 1);');
    db.run('INSERT INTO order_item VALUES ("41005158420", "LSK010102B", "Rückensteak (3 Stück)", "Landschlachterei Krischke", 8.2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818157220", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818157220", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818157120", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818157120", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818157020", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818157020", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156619", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818156619", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818156519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156419", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 5);');
    db.run('INSERT INTO order_item VALUES ("16818156319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156219", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818156119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818156119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818156119", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("16818156019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818156019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155519", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 3);');
    db.run('INSERT INTO order_item VALUES ("16818155319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818155219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818155119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 25);');
    db.run('INSERT INTO order_item VALUES ("16818155119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 25);');
    db.run('INSERT INTO order_item VALUES ("16818155019", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818155019", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818154819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818154719", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818154619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818154419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154219", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154219", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818154119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818154119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818154019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818154019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153819", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153719", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153719", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153319", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818153119", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 3);');
    db.run('INSERT INTO order_item VALUES ("16818153119", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 3);');
    db.run('INSERT INTO order_item VALUES ("16818153019", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818153019", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818152919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 6);');
    db.run('INSERT INTO order_item VALUES ("16818152819", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152819", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152819", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 12);');
    db.run('INSERT INTO order_item VALUES ("16818152819", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("16818152819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 6);');
    db.run('INSERT INTO order_item VALUES ("16818152719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818152719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818152619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152519", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152519", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 10);');
    db.run('INSERT INTO order_item VALUES ("16818152519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152519", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818152419", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818152319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152319", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152219", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152119", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818152019", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151919", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151919", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151819", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151819", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151719", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151719", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151619", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("16818151519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151219", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("16818151119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818151119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818151019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818151019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150719", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150719", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150619", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150519", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150419", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150319", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150219", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150119", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150019", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 6);');
    db.run('INSERT INTO order_item VALUES ("16818150019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818150019", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818150019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 6);');
    db.run('INSERT INTO order_item VALUES ("16818150019", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818149919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120219", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120219", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120119", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120119", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120019", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818120019", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818119919", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119819", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119819", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119719", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119719", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119719", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119719", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119619", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119519", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818119519", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119419", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119419", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119319", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818119219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("B1186", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1185", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1184", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1183", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 2);');
    db.run('INSERT INTO order_item VALUES ("B1182", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1181", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1180", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1179", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 2);');
    db.run('INSERT INTO order_item VALUES ("B1178", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1177", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1176", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1175", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1174", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 2);');
    db.run('INSERT INTO order_item VALUES ("B1173", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1172", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1171", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1170", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1169", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1168", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 2);');
    db.run('INSERT INTO order_item VALUES ("B1168", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 15);');
    db.run('INSERT INTO order_item VALUES ("B1167", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1166", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1165", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1164", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1163", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1162", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1161", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1160", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1159", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1158", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 2);');
    db.run('INSERT INTO order_item VALUES ("B1157", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1156", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1156", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1155", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1154", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1153", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1152", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1151", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1150", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1149", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1149", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 3);');
    db.run('INSERT INTO order_item VALUES ("B1148", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1147", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1146", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1146", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 18);');
    db.run('INSERT INTO order_item VALUES ("B1145", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1145", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1144", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 2);');
    db.run('INSERT INTO order_item VALUES ("B1143", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1142", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1141", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1140", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1139", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1138", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1137", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1136", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 2);');
    db.run('INSERT INTO order_item VALUES ("B1135", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1134", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 2);');
    db.run('INSERT INTO order_item VALUES ("B1133", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1132", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1131", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1131", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1130", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1130", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1129", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1128", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1128", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1127", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 37.02, 1);');
    db.run('INSERT INTO order_item VALUES ("B1126", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 37.02, 1);');
    db.run('INSERT INTO order_item VALUES ("B1125", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1124", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1124", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 37.02, 1);');
    db.run('INSERT INTO order_item VALUES ("B1123", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1122", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1121", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 5);');
    db.run('INSERT INTO order_item VALUES ("B1121", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1121", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1120", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1120", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1119", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 35.82, 1);');
    db.run('INSERT INTO order_item VALUES ("B1118", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 2);');
    db.run('INSERT INTO order_item VALUES ("B1117", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 1);');
    db.run('INSERT INTO order_item VALUES ("B1116", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("B1116", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 34.62, 3);');
    db.run('INSERT INTO order_item VALUES ("B1115", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1114", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1113", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1112", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1112", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1111", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1110", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1109", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1108", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1107", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1106", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1105", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1105", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 5);');
    db.run('INSERT INTO order_item VALUES ("B1104", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("B1103", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1102", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1101", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1100", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1100", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("B1099", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1098", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 3);');
    db.run('INSERT INTO order_item VALUES ("B1097", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("B1096", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1095", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1094", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1093", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1093", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1092", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1091", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1090", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("B1090", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1089", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1088", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1087", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1087", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1086", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 5);');
    db.run('INSERT INTO order_item VALUES ("B1085", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1084", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1083", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1083", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1082", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 7);');
    db.run('INSERT INTO order_item VALUES ("B1082", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1082", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1081", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1080", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1079", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1079", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("B1078", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1078", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1077", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1076", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1076", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1075", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 3);');
    db.run('INSERT INTO order_item VALUES ("B1075", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("B1074", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1073", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1072", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1072", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1071", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1071", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1071", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1070", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1069", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1068", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1068", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1067", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1067", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1066", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1065", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1064", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1063", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1063", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1062", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 4);');
    db.run('INSERT INTO order_item VALUES ("B1061", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1061", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1060", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1059", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 2);');
    db.run('INSERT INTO order_item VALUES ("B1058", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1057", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1056", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1055", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1054", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1053", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1052", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1051", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1051", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1051", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1050", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 39.42, 1);');
    db.run('INSERT INTO order_item VALUES ("B1050", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1049", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1048", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1047", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1046", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1046", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1045", "40", "10 Liter Fass HASTER DUNKEL", "Haster Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("B1045", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1044", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1044", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1043", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1042", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("B1042", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1041", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1040", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1039", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1038", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1037", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 3);');
    db.run('INSERT INTO order_item VALUES ("B1036", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1035", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1034", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1033", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1032", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1031", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1030", "100", "BIERGLAS Haster Campusbier", "Haster Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("B1029", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1028", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1027", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1026", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1025", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 3);');
    db.run('INSERT INTO order_item VALUES ("B1024", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 2);');
    db.run('INSERT INTO order_item VALUES ("B1023", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1022", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 3);');
    db.run('INSERT INTO order_item VALUES ("B1021", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1020", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1019", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1018", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1017", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1016", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1015", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 1);');
    db.run('INSERT INTO order_item VALUES ("B1014", "30", "Kiste HASTER HELL (24 Flaschen à 0,33 Liter)", "Haster Campusbier", 32.22, 3);');
    db.run('INSERT INTO order_item VALUES ("16818139019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 4);');
    db.run('INSERT INTO order_item VALUES ("16818139019", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 2);');
    db.run('INSERT INTO order_item VALUES ("16818138919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138819", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138819", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138619", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138619", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138419", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138319", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818138219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818138219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818138119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138019", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818138019", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137719", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 3);');
    db.run('INSERT INTO order_item VALUES ("16818137719", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 3);');
    db.run('INSERT INTO order_item VALUES ("16818137619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818137619", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818137519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818137519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818137419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137319", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137319", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137219", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137219", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137019", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818137019", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136719", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818136719", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136719", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818136619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136619", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818136619", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136619", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818136519", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136519", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818136419", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818136319", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136319", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818136019", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135919", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818135819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135619", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135319", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135319", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135219", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135019", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818135019", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134919", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818134919", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818134819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 3);');
    db.run('INSERT INTO order_item VALUES ("16818134719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818134619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134519", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134519", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134419", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134319", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818134319", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818134219", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134219", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134219", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134019", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818134019", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133919", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133919", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133719", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133719", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133619", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133619", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133319", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133319", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133119", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133119", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818133119", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133019", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818133019", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818132919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132919", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132919", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132719", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132719", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132619", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818132619", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818132519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132419", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818132419", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818132319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132219", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132119", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132119", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818132019", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818132019", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818131919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131719", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131719", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131619", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131619", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131519", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131519", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131419", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131419", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131419", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131419", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131219", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131219", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131219", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818131219", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131119", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131119", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131019", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131019", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131019", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 12);');
    db.run('INSERT INTO order_item VALUES ("16818131019", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818131019", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130919", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818130919", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818130819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130719", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818130719", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("16818130719", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818130619", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130619", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130619", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818130619", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130319", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130319", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130319", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130319", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130219", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130119", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130119", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130019", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818130019", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129719", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129719", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129619", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129419", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129419", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129419", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129319", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129319", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129219", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 4);');
    db.run('INSERT INTO order_item VALUES ("16818129219", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 4);');
    db.run('INSERT INTO order_item VALUES ("16818129119", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129119", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818129019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818129019", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818128919", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818128919", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818128819", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128819", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128719", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 10);');
    db.run('INSERT INTO order_item VALUES ("16818128619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128519", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128519", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818128419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818128319", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128319", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128319", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128319", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128219", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128019", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818128019", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127919", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127919", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127719", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127719", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127619", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127619", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127319", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127319", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127119", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127119", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818127019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818127019", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126919", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126919", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126719", "", "Pfand für 6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126719", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126719", "20", "6-Pack Campusbier Haster Hell (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126619", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126619", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126519", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126519", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126419", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126319", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126319", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818126219", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126219", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126119", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126119", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126019", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818126019", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125919", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125919", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125919", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125819", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818125819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 3);');
    db.run('INSERT INTO order_item VALUES ("16818125819", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818125819", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 3);');
    db.run('INSERT INTO order_item VALUES ("16818125819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125719", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 2);');
    db.run('INSERT INTO order_item VALUES ("16818125719", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 2);');
    db.run('INSERT INTO order_item VALUES ("16818125619", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125619", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 3);');
    db.run('INSERT INTO order_item VALUES ("16818125319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 3);');
    db.run('INSERT INTO order_item VALUES ("16818125219", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125219", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125119", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125119", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818125019", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124919", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124919", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124619", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 10);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 10);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124519", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124419", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124419", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818124319", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124219", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124219", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818124019", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123919", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 3);');
    db.run('INSERT INTO order_item VALUES ("16818123919", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818123819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818123819", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818123719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818123719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818123619", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123619", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123519", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 3);');
    db.run('INSERT INTO order_item VALUES ("16818123519", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123519", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 3);');
    db.run('INSERT INTO order_item VALUES ("16818123419", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123219", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123219", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 3);');
    db.run('INSERT INTO order_item VALUES ("16818123219", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818123219", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818123119", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818123119", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818123019", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122919", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122919", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122819", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122819", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122619", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122619", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122419", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818122319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818122219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122219", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122219", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122219", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122119", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818122119", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122119", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122119", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122019", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818122019", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("16818122019", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121919", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121919", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121819", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121819", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121719", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 6);');
    db.run('INSERT INTO order_item VALUES ("16818121719", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121719", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818121619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121619", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121519", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121519", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121319", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121119", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121119", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121019", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818121019", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120819", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120819", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120719", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120719", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120619", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120619", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120519", "", "Pfand für Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 0.96, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120519", "22", "Twin-Pack Campusbier Haster Dunkel und Hell (2 x 6 Flaschen à 0,33 Liter)", "Campusbier", 16, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120419", "", "Pfand für Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120419", "32", "Kiste Campusbier Gemischt (2 x 12 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120419", "300", "Weihnachtliche Geschenkkiste Campusbier", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120319", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120319", "30", "Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120219", "", "Pfand für Kiste Campusbier Haster Hell (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818120219", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818149719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818149619", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149619", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149419", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149219", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149119", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149119", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818149019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818149019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818148919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148819", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148819", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818148619", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818148519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818148519", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818148419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818148219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818148119", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148119", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("16818148119", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818148119", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818148019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 8);');
    db.run('INSERT INTO order_item VALUES ("16818148019", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 8);');
    db.run('INSERT INTO order_item VALUES ("16818147919", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818147919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147919", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818147819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147819", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818147719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818147619", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147619", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147519", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147319", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147319", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147119", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147119", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818147019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146919", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("16818146819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 4);');
    db.run('INSERT INTO order_item VALUES ("16818146719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818146719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818146719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 3);');
    db.run('INSERT INTO order_item VALUES ("16818146619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818146519", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146519", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146219", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146219", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818146119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818146119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818146019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 2);');
    db.run('INSERT INTO order_item VALUES ("16818146019", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145719", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145719", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145519", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145519", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145419", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 3);');
    db.run('INSERT INTO order_item VALUES ("16818145419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145419", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 3);');
    db.run('INSERT INTO order_item VALUES ("16818145319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145219", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818145119", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145119", "101", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145119", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818145019", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144919", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 9);');
    db.run('INSERT INTO order_item VALUES ("16818144919", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144919", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 6);');
    db.run('INSERT INTO order_item VALUES ("16818144819", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818144819", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818144719", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 6);');
    db.run('INSERT INTO order_item VALUES ("16818144619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818144519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818144419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818144419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818144319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818144019", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143919", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143919", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143819", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818143719", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143619", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143619", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143519", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143519", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143319", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818143219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818143219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818143119", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143119", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818143019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818143019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818142919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142819", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142819", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142619", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142619", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 3);');
    db.run('INSERT INTO order_item VALUES ("16818142419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818142319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 3);');
    db.run('INSERT INTO order_item VALUES ("16818142319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 3);');
    db.run('INSERT INTO order_item VALUES ("16818142219", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("16818142119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818142119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818142019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142019", "", "Pfand für Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 0.64, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142019", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818142019", "301", "Weihnachtliche Geschenkkiste Campusbier (Dunkel)", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("16818141719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 4);');
    db.run('INSERT INTO order_item VALUES ("16818141619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
    db.run('INSERT INTO order_item VALUES ("16818141419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 4);');
    db.run('INSERT INTO order_item VALUES ("16818141319", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141319", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818141119", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141119", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141019", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818141019", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 3);');
    db.run('INSERT INTO order_item VALUES ("16818141019", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140919", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140919", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 4);');
    db.run('INSERT INTO order_item VALUES ("16818140919", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140819", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140819", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140719", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140719", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140619", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140619", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140419", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 5);');
    db.run('INSERT INTO order_item VALUES ("16818140419", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 5);');
    db.run('INSERT INTO order_item VALUES ("16818140319", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140319", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140219", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140219", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 2);');
    db.run('INSERT INTO order_item VALUES ("16818140119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818140019", "", "Pfand für 10 Liter Fass Campusbier Haster Hell", "Campusbier", 25, 1);');
    db.run('INSERT INTO order_item VALUES ("16818140019", "40", "10 Liter Fass Campusbier Haster Hell", "Campusbier", 35, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139919", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139919", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139819", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139819", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139719", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139719", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139619", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139619", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139519", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 2);');
    db.run('INSERT INTO order_item VALUES ("16818139519", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 2);');
    db.run('INSERT INTO order_item VALUES ("16818139419", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139419", "100", "Bierglas Campusbier 0,25 Liter", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139419", "51", "Flaschenöffner Campusbier", "Campusbier", 2, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139419", "200", "10 Design-Untersetzer Edition Campus Haste von MIENE STRATEN", "Campusbier", 14.9, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139419", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139319", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139319", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139219", "", "Pfand für Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 3.42, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139219", "100", "1 Kilo Äpfel Deichperle", "Hochschule Osnabrück", 2, 2);');
    db.run('INSERT INTO order_item VALUES ("16818139219", "31", "Kiste Campusbier Haster Dunkel (24 Flaschen à 0,33 Liter)", "Campusbier", 29.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139119", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139119", "21", "6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 8.5, 1);');
    db.run('INSERT INTO order_item VALUES ("16818139019", "", "Pfand für 6-Pack Campusbier Haster Dunkel (6 Flaschen à 0,33 Liter)", "Campusbier", 0.48, 4);');
}

function insertCustomer(db) {
    // Create customers
    db.run('INSERT INTO customer VALUES (2, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (3, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (4, 49429, "Visbek", 1);');
    db.run('INSERT INTO customer VALUES (5, 49479, "Ibbenbüren", 1);');
    db.run('INSERT INTO customer VALUES (6, 49685, "Halen", 1);');
    db.run('INSERT INTO customer VALUES (7, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (8, 49504, "Lotte", 1);');
    db.run('INSERT INTO customer VALUES (9, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (10, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (11, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (12, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (13, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (14, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (15, null, null, 1);');
    db.run('INSERT INTO customer VALUES (16, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (17, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (18, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (19, 49419, "Wagenfeld", 1);');
    db.run('INSERT INTO customer VALUES (20, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (21, 21647, "Moisburg", 1);');
    db.run('INSERT INTO customer VALUES (22, 49082, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (23, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (24, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (25, 88213, "Ravensburg", 1);');
    db.run('INSERT INTO customer VALUES (26, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (27, 49170, "Hagen a.T.W", 1);');
    db.run('INSERT INTO customer VALUES (28, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (29, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (30, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (31, 49152, "Bad Essen", 0);');
    db.run('INSERT INTO customer VALUES (32, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (33, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (34, 49356, "Diepholz", 1);');
    db.run('INSERT INTO customer VALUES (35, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (36, 30855, "Langenhagen", 1);');
    db.run('INSERT INTO customer VALUES (37, 49074, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (38, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (39, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (40, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (41, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (42, 49744, "Geeste", 1);');
    db.run('INSERT INTO customer VALUES (43, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (44, 49170, "Hagen a.t.W.", 1);');
    db.run('INSERT INTO customer VALUES (45, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (46, 49832, "Messingen", 1);');
    db.run('INSERT INTO customer VALUES (47, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (48, 49610, "Quakenbrück", 1);');
    db.run('INSERT INTO customer VALUES (49, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (50, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (51, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (52, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (53, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (54, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (55, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (56, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (57, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (58, 49596, "Gehrde", 1);');
    db.run('INSERT INTO customer VALUES (59, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (60, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (61, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (62, 49610, "Quakenbrück", 1);');
    db.run('INSERT INTO customer VALUES (63, 49504, "Lotte", 0);');
    db.run('INSERT INTO customer VALUES (64, 49186, "Bad Iburg", 1);');
    db.run('INSERT INTO customer VALUES (65, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (66, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (67, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (68, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (69, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (70, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (71, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (72, 49084, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (73, 48565, "Steinfurt", 1);');
    db.run('INSERT INTO customer VALUES (74, 49090, "Osanabrück", 1);');
    db.run('INSERT INTO customer VALUES (75, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (76, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (77, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (78, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (79, 49191, "Belm", 1);');
    db.run('INSERT INTO customer VALUES (80, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (81, 38124, "Braunschweig", 0);');
    db.run('INSERT INTO customer VALUES (82, 26219, "Bösel", 1);');
    db.run('INSERT INTO customer VALUES (83, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (84, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (85, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (86, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (87, 49080, "Osnabrück (Wüste)", 1);');
    db.run('INSERT INTO customer VALUES (88, 49832, "Messingen", 0);');
    db.run('INSERT INTO customer VALUES (89, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (90, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (91, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (92, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (93, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (94, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (95, 32257, "Bünde", 1);');
    db.run('INSERT INTO customer VALUES (96, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (97, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (98, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (99, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (100, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (101, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (102, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (103, 49196, "Bad Laer", 1);');
    db.run('INSERT INTO customer VALUES (104, 49632, "Essen", 1);');
    db.run('INSERT INTO customer VALUES (105, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (106, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (107, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (108, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (109, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (110, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (111, 49170, "Hagen a.T.W.", 0);');
    db.run('INSERT INTO customer VALUES (112, 49429, "Visbek", 1);');
    db.run('INSERT INTO customer VALUES (113, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (114, 49082, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (115, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (117, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (116, 49082, "Osnabrueck", 1);');
    db.run('INSERT INTO customer VALUES (118, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (119, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (120, 49525, "Lengerich", 1);');
    db.run('INSERT INTO customer VALUES (121, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (122, 60488, "Frankfurt", 1);');
    db.run('INSERT INTO customer VALUES (123, 48496, "Hopsten", 1);');
    db.run('INSERT INTO customer VALUES (124, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (125, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (126, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (127, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (128, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (129, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (130, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (131, 49143, "Bissendorf", 1);');
    db.run('INSERT INTO customer VALUES (132, 49477, "Ibbenbüren", 1);');
    db.run('INSERT INTO customer VALUES (133, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (134, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (135, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (136, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (137, 63579, "Freigericht", 1);');
    db.run('INSERT INTO customer VALUES (138, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (139, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (140, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (141, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (142, 49191, "Belm", 1);');
    db.run('INSERT INTO customer VALUES (143, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (144, 54411, "Hermeskeil", 1);');
    db.run('INSERT INTO customer VALUES (145, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (146, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (147, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (148, 49074, "osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (149, 49191, "Belm", 1);');
    db.run('INSERT INTO customer VALUES (150, 49191, "Belm", 1);');
    db.run('INSERT INTO customer VALUES (151, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (152, 49074, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (153, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (154, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (155, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (156, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (157, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (158, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (159, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (160, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (161, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (162, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (163, 48356, "Nordwalde", 1);');
    db.run('INSERT INTO customer VALUES (164, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (165, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (166, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (168, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (167, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (169, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (170, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (171, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (172, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (173, 48480, "Spelle", 1);');
    db.run('INSERT INTO customer VALUES (175, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (174, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (176, 49196, "BadLaer", 1);');
    db.run('INSERT INTO customer VALUES (177, 49186, "Bad Iburg", 1);');
    db.run('INSERT INTO customer VALUES (178, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (179, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (180, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (181, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (182, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (183, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (184, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (185, 49076, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (186, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (187, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (188, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (189, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (190, 49596, "Gehrde", 1);');
    db.run('INSERT INTO customer VALUES (191, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (192, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (193, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (194, 49326, "Melle", 1);');
    db.run('INSERT INTO customer VALUES (195, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (196, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (197, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (198, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (199, 49179, "Ostercappeln", 0);');
    db.run('INSERT INTO customer VALUES (200, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (201, null, null, 1);');
    db.run('INSERT INTO customer VALUES (202, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (203, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (204, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (205, 49504, "Lotte", 0);');
    db.run('INSERT INTO customer VALUES (206, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (207, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (208, 49086, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (209, 49086, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (210, 49086, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (211, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (212, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (213, 49477, "Ibbenbüren", 1);');
    db.run('INSERT INTO customer VALUES (214, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (215, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (216, 49074, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (217, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (218, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (219, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (220, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (221, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (222, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (223, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (224, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (225, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (226, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (227, 49586, "Neuenkirchen", 1);');
    db.run('INSERT INTO customer VALUES (228, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (229, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (230, 49074, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (231, 49080, "Osnabrueck", 1);');
    db.run('INSERT INTO customer VALUES (232, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (233, 49492, "Westerkappeln", 1);');
    db.run('INSERT INTO customer VALUES (234, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (235, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (236, 49196, "Bad Laer", 1);');
    db.run('INSERT INTO customer VALUES (237, 48249, "Dülmen", 1);');
    db.run('INSERT INTO customer VALUES (238, 53340, "Meckenheim", 1);');
    db.run('INSERT INTO customer VALUES (239, 96487, "Dörfles-Esbach", 1);');
    db.run('INSERT INTO customer VALUES (240, 49179, "Ostercappeln", 1);');
    db.run('INSERT INTO customer VALUES (241, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (242, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (243, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (244, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (245, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (246, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (247, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (248, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (249, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (250, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (251, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (252, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (253, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (254, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (255, 49586, "Neuenkirchen", 1);');
    db.run('INSERT INTO customer VALUES (256, 49565, "Bramsche", 0);');
    db.run('INSERT INTO customer VALUES (257, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (258, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (259, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (260, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (261, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (262, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (263, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (264, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (265, 49134, "wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (266, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (267, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (268, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (269, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (270, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (271, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (272, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (273, null, null, 1);');
    db.run('INSERT INTO customer VALUES (274, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (275, 64625, "Bensheim", 0);');
    db.run('INSERT INTO customer VALUES (276, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (277, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (278, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (279, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (280, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (281, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (282, 49152, "Bad Essen", 1);');
    db.run('INSERT INTO customer VALUES (283, 45888, "Gelsenkirchen", 1);');
    db.run('INSERT INTO customer VALUES (284, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (285, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (286, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (287, 49076, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (288, 49328, "Melle", 1);');
    db.run('INSERT INTO customer VALUES (289, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (290, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (291, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (292, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (293, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (294, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (295, NULL, NULL, 1);');
    db.run('INSERT INTO customer VALUES (296, 49497, "Mettingen", 1);');
    db.run('INSERT INTO customer VALUES (298, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (297, 49074, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (299, 33378, "Rheda-Wiedenbrück", 1);');
    db.run('INSERT INTO customer VALUES (300, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (301, 33161, "Hövelhof", 1);');
    db.run('INSERT INTO customer VALUES (303, 46459, "Rees", 1);');
    db.run('INSERT INTO customer VALUES (302, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (304, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (305, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (306, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (307, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (308, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (309, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (310, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (311, 49205, "Hasbergen", 0);');
    db.run('INSERT INTO customer VALUES (312, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (313, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (314, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (315, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (316, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (317, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (318, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (319, 49082, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (320, 49143, "Bissendorf", 0);');
    db.run(
        'INSERT INTO customer VALUES (321, 49080, "Niedersachsen - Osnabrück", 1);'
    );
    db.run('INSERT INTO customer VALUES (322, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (323, 49504, "Lotte", 1);');
    db.run('INSERT INTO customer VALUES (324, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (325, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (326, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (327, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (328, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (329, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (330, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (331, 49586, "Merzen", 1);');
    db.run('INSERT INTO customer VALUES (332, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (333, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (334, 46459, "Rees", 0);');
    db.run('INSERT INTO customer VALUES (335, 49504, "Lotte", 1);');
    db.run('INSERT INTO customer VALUES (336, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (337, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (338, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (339, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (340, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (341, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (342, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (343, 49143, "Bissendorf", 1);');
    db.run('INSERT INTO customer VALUES (344, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (345, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (346, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (347, 49086, "Osnbarück", 1);');
    db.run('INSERT INTO customer VALUES (348, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (349, 49214, "Bad Rothenfelde", 1);');
    db.run('INSERT INTO customer VALUES (350, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (351, 49716, "Meppen", 0);');
    db.run('INSERT INTO customer VALUES (352, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (353, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (354, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (355, 49088, "Osnabrück", 1);');
    db.run(
        'INSERT INTO customer VALUES (356, 49170, "Hagen am Teutoburger Wald", 1);'
    );
    db.run('INSERT INTO customer VALUES (357, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (358, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (359, 49143, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (360, 49090, "Osnabrueck", 1);');
    db.run('INSERT INTO customer VALUES (361, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (362, 49090, "OSNABRÜCK", 1);');
    db.run('INSERT INTO customer VALUES (363, 49324, "Melle", 1);');
    db.run('INSERT INTO customer VALUES (364, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (365, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (366, 49504, "Lotte", 1);');
    db.run('INSERT INTO customer VALUES (367, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (368, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (369, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (370, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (371, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (372, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (373, 49809, "Lingen (Ems)", 0);');
    db.run('INSERT INTO customer VALUES (374, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (375, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (376, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (377, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (378, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (379, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (380, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (381, NULL, NULL, 1);');
    db.run('INSERT INTO customer VALUES (382, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (383, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (384, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (385, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (386, 49179, "Ostercappeln", 1);');
    db.run('INSERT INTO customer VALUES (387, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (388, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (389, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (390, 49078, "Osnabrück", 0);');
    db.run(
        'INSERT INTO customer VALUES (391, 49179, "Ostercappeln OT Haaren", 1);'
    );
    db.run('INSERT INTO customer VALUES (392, 48480, "Spelle", 1);');
    db.run('INSERT INTO customer VALUES (393, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (394, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (395, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (396, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (397, 32427, "Minden", 1);');
    db.run('INSERT INTO customer VALUES (398, null, null, 1);');
    db.run('INSERT INTO customer VALUES (399, 49152, "Bad Essen", 1);');
    db.run('INSERT INTO customer VALUES (400, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (401, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (402, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (403, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (404, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (405, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (406, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (407, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (408, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (409, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (410, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (411, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (412, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (413, 49090, "Osnabrück", 0);');
    db.run(
        'INSERT INTO customer VALUES (414, 49170, "Hagen am Teutoburger Wald", 1);'
    );
    db.run('INSERT INTO customer VALUES (415, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (416, 49179, "Ostercappeln", 1);');
    db.run('INSERT INTO customer VALUES (417, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (418, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (419, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (420, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (421, 49078, "osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (422, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (423, 49638, "Nortrup", 1);');
    db.run('INSERT INTO customer VALUES (424, 49638, "Nortrup", 1);');
    db.run('INSERT INTO customer VALUES (425, 49186, "Bad Iburg", 1);');
    db.run('INSERT INTO customer VALUES (426, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (427, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (428, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (429, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (430, 49477, "Ibbenbüren", 1);');
    db.run('INSERT INTO customer VALUES (431, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (432, 49134, "WALLENHORST", 1);');
    db.run('INSERT INTO customer VALUES (433, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (434, 49088, "Osnabrueck", 1);');
    db.run('INSERT INTO customer VALUES (435, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (436, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (437, 49163, "49163 Hunteburg", 1);');
    db.run('INSERT INTO customer VALUES (438, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (439, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (440, 49124, "Georgsmarienhütte", 0);');
    db.run('INSERT INTO customer VALUES (441, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (442, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (443, 48488, "Emsbüren", 1);');
    db.run('INSERT INTO customer VALUES (444, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (445, 49453, "Rehden", 0);');
    db.run('INSERT INTO customer VALUES (446, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (447, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (448, 49565, "Bramsche", 0);');
    db.run('INSERT INTO customer VALUES (449, 49163, "Bohmte", 0);');
    db.run('INSERT INTO customer VALUES (450, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (451, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (452, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (453, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (454, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (455, 48499, "Salzbergen", 0);');
    db.run('INSERT INTO customer VALUES (456, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (457, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (458, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (459, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (460, 49685, "Emstek", 1);');
    db.run('INSERT INTO customer VALUES (461, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (462, 49082, "osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (463, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (464, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (465, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (466, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (467, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (468, 49497, "Mettingen", 1);');
    db.run('INSERT INTO customer VALUES (469, 49497, "Mettingen", 0);');
    db.run('INSERT INTO customer VALUES (470, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (471, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (472, 49536, "Lienen", 0);');
    db.run('INSERT INTO customer VALUES (473, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (474, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (475, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (476, 49082, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (477, 49497, "Mettingen", 1);');
    db.run('INSERT INTO customer VALUES (478, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (479, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (480, 49479, "Ibbenbüren", 0);');
    db.run('INSERT INTO customer VALUES (481, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (483, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (482, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (484, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (485, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (486, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (487, 49074, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (488, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (489, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (490, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (491, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (492, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (493, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (494, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (495, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (496, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (497, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (498, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (499, 49565, "Bramsche", 0);');
    db.run('INSERT INTO customer VALUES (500, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (501, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (502, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (503, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (504, 49479, "Ibenbüren", 1);');
    db.run('INSERT INTO customer VALUES (505, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (506, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (507, 49076, "Osnabrueck", 1);');
    db.run('INSERT INTO customer VALUES (508, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (509, 49565, "Bramsche", 1);');
    db.run('INSERT INTO customer VALUES (510, 49090, "Osnabrück", 0);');
    db.run(
        'INSERT INTO customer VALUES (511, 49170, "Hagen am Teutoburger Wald", 1);'
    );
    db.run('INSERT INTO customer VALUES (512, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (513, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (514, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (515, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (516, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (517, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (518, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (519, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (520, 49525, "Lengerich", 1);');
    db.run('INSERT INTO customer VALUES (521, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (522, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (523, 49596, "Gehrde", 1);');
    db.run('INSERT INTO customer VALUES (525, 49078, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (524, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (526, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (527, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (528, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (529, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (530, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (531, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (532, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (533, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (534, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (535, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (536, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (537, 49090, "Osnabrück", 1);');
    db.run(
        'INSERT INTO customer VALUES (538, 49170, "Hagen am Teutoburger Wald", 1);'
    );
    db.run('INSERT INTO customer VALUES (539, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (540, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (541, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (542, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (543, 49082, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (544, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (545, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (546, 49080, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (547, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (548, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (549, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (550, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (551, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (552, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (553, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (554, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (555, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (556, 49681, "Nikolausdorf", 1);');
    db.run('INSERT INTO customer VALUES (557, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (558, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (559, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (560, 49401, "Damme", 1);');
    db.run('INSERT INTO customer VALUES (561, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (562, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (563, 49565, "BRAMSCHE", 1);');
    db.run('INSERT INTO customer VALUES (564, 49143, "Bissendorf", 0);');
    db.run('INSERT INTO customer VALUES (565, 49143, "Bissendorf", 1);');
    db.run('INSERT INTO customer VALUES (566, 49632, "Essen", 0);');
    db.run('INSERT INTO customer VALUES (567, 49205, "Hasbergen", 1);');
    db.run('INSERT INTO customer VALUES (568, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (569, 49078, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (570, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (571, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (572, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (574, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (573, 4909, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (575, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (576, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (577, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (578, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (579, 49086, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (580, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (581, 49134, "Wallenhorst", 0);');
    db.run('INSERT INTO customer VALUES (582, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (583, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (584, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (585, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (586, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (587, 49191, "Belm", 1);');
    db.run('INSERT INTO customer VALUES (588, 49088, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (589, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (590, 49074, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (591, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (592, 49124, "Georgsmarienhütte", 1);');
    db.run('INSERT INTO customer VALUES (594, 49076, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (593, 49076, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (595, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (596, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (597, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (598, 49080, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (599, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (600, 49143, "Bissendorf", 1);');
    db.run('INSERT INTO customer VALUES (601, 49434, "Neuenkirchen-Vörden", 1);');
    db.run('INSERT INTO customer VALUES (602, 49163, "Bohmte", 1);');
    db.run('INSERT INTO customer VALUES (603, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (604, 49377, "Vechta", 1);');
    db.run('INSERT INTO customer VALUES (605, 49504, "Lotte", 0);');
    db.run('INSERT INTO customer VALUES (606, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (607, 49134, "Wallenhorst", 1);');
    db.run('INSERT INTO customer VALUES (608, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (609, 49082, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (610, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (611, 49088, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (612, 49090, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (613, 49090, "Osnabrück", 0);');
    db.run('INSERT INTO customer VALUES (614, 49084, "Osnabrück", 1);');
    db.run('INSERT INTO customer VALUES (615, 49078, "Osnabrück", 1);');
}

function insertOrderHead(db) {
    db.run(
        'INSERT INTO order_head VALUES ("41005162220", 1, "2020-05-11 15:28:28", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173920", 2, "2020-05-27 09:55:04", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150319", 3, "2019-12-08 07:15:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1028", 4, "2019-05-24 17:09:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1030", 4, "2019-05-24 17:14:08", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123919", 5, "2019-11-15 06:34:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151719", 6, "2019-12-11 14:57:08", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175720", 7, "2020-05-28 23:06:43", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1154", 8, "2019-06-14 13:59:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144619", 9, "2019-11-22 13:02:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138719", 10, "2019-11-17 11:19:19", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159120", 10, "2020-05-09 08:20:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005158820", 10, "2020-05-09 07:41:23", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159020", 10, "2020-05-09 08:06:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1126", 10, "2019-05-28 18:39:53", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1024", 11, "2019-05-24 15:01:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166720", 12, "2020-05-19 09:01:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005169020", 13, "2020-05-21 13:40:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133919", 13, "2019-11-15 19:45:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005169020", 14, "2020-05-21 13:40:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133919", 14, "2019-11-15 19:45:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177520", 15, "2020-06-03 07:30:39", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135719", 16, "2019-11-16 10:05:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163620", 17, "2020-05-13 09:18:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005158620", 18, "2020-05-09 06:12:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122219", 18, "2019-11-15 05:07:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1036", 19, "2019-05-24 18:55:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146419", 20, "2019-11-25 12:25:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145719", 21, "2019-11-24 10:14:05", "partially_refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144219", 22, "2019-11-21 16:34:02", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144019", 23, "2019-11-21 09:15:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125019", 23, "2019-11-15 07:35:19", "refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159820", 24, "2020-05-09 09:47:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139719", 24, "2019-11-17 20:10:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128219", 25, "2019-11-15 10:34:17", "refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1055", 26, "2019-05-25 07:22:17", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1133", 27, "2019-05-31 17:14:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119319", 28, "2019-11-14 14:21:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119219", 28, "2019-11-14 14:19:21", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130619", 29, "2019-11-15 14:25:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126119", 30, "2019-11-15 08:30:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126819", 31, "2019-11-15 08:45:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162820", 32, "2020-05-12 15:04:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123819", 33, "2019-11-15 06:32:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124419", 33, "2019-11-15 06:51:30", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1018", 34, "2019-05-24 13:36:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1155", 34, "2019-06-14 20:04:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176420", 35, "2020-05-30 14:06:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1071", 36, "2019-05-25 09:30:35", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147219", 37, "2019-11-27 12:42:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165420", 38, "2020-05-16 09:55:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164320", 39, "2020-05-13 19:08:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131419", 40, "2019-11-15 15:14:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167320", 41, "2020-05-20 06:18:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147619", 42, "2019-11-29 12:18:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142019", 43, "2019-11-19 09:51:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142819", 44, "2019-11-19 19:22:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130519", 45, "2019-11-15 14:10:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165620", 46, "2020-05-16 21:20:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163520", 47, "2020-05-13 08:36:30", "partially_refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1014", 47, "2019-05-24 12:59:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155219", 47, "2019-12-19 15:34:20", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163520", 48, "2020-05-13 08:36:30", "partially_refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1014", 48, "2019-05-24 12:59:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155219", 48, "2019-12-19 15:34:20", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141219", 49, "2019-11-18 19:02:15", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177120", 50, "2020-06-02 07:36:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176920", 50, "2020-06-02 07:17:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177020", 50, "2020-06-02 07:26:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176220", 50, "2020-05-29 15:38:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167120", 50, "2020-05-19 10:45:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818156219", 50, "2020-01-15 10:26:52", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155819", 50, "2020-01-15 10:14:48", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150019", 50, "2019-12-06 08:48:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818157120", 50, "2020-04-24 10:55:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177020", 51, "2020-06-02 07:26:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176220", 51, "2020-05-29 15:38:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177120", 51, "2020-06-02 07:36:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176920", 51, "2020-06-02 07:17:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167120", 51, "2020-05-19 10:45:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818157120", 51, "2020-04-24 10:55:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818156219", 51, "2020-01-15 10:26:52", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155819", 51, "2020-01-15 10:14:48", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150019", 51, "2019-12-06 08:48:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173120", 52, "2020-05-26 19:31:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139819", 52, "2019-11-17 21:39:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1042", 53, "2019-05-25 05:19:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168820", 54, "2020-05-20 19:56:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120019", 55, "2019-11-14 17:05:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150919", 55, "2019-12-10 12:47:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151819", 55, "2019-12-11 20:57:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1043", 56, "2019-05-25 05:48:04", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1080", 57, "2019-05-25 11:37:06", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1149", 58, "2019-06-10 14:19:57", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1181", 59, "2019-06-20 19:15:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154119", 60, "2019-12-13 14:28:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159920", 61, "2020-05-09 10:14:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140119", 61, "2019-11-18 08:20:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155419", 62, "2020-01-09 13:53:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142719", 63, "2019-11-19 18:59:39", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140619", 63, "2019-11-18 12:02:33", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131919", 64, "2019-11-15 16:09:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163320", 65, "2020-05-13 07:38:07", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161120", 66, "2020-05-10 14:59:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134119", 67, "2019-11-15 20:38:05", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005158420", 67, "2020-05-09 04:45:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132819", 68, "2019-11-15 17:22:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1022", 69, "2019-05-24 14:43:53", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151919", 70, "2019-12-12 06:45:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170220", 71, "2020-05-22 23:12:33", "refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139619", 71, "2019-11-17 18:51:19", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124619", 72, "2019-11-15 07:15:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1163", 73, "2019-06-17 15:07:53", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1183", 73, "2019-06-21 08:40:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154819", 74, "2019-12-13 16:47:53", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175820", 75, "2020-05-29 05:35:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175320", 76, "2020-05-28 18:42:05", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124919", 76, "2019-11-15 07:23:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175320", 77, "2020-05-28 18:42:05", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124919", 77, "2019-11-15 07:23:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1168", 78, "2019-06-18 12:12:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123419", 79, "2019-11-15 06:19:55", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152419", 80, "2019-12-12 21:36:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168520", 81, "2020-05-20 19:04:26", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128619", 82, "2019-11-15 11:05:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1099", 82, "2019-05-26 09:53:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1099", 83, "2019-05-26 09:53:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128619", 83, "2019-11-15 11:05:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147019", 84, "2019-11-27 09:02:53", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146919", 85, "2019-11-27 07:56:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147419", 85, "2019-11-28 10:11:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164220", 86, "2020-05-13 15:24:21", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130319", 87, "2019-11-15 14:06:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149719", 88, "2019-12-05 16:09:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161920", 89, "2020-05-11 11:24:23", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147119", 90, "2019-11-27 12:02:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165920", 91, "2020-05-18 10:05:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143719", 91, "2019-11-20 15:33:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165920", 92, "2020-05-18 10:05:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143719", 92, "2019-11-20 15:33:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143819", 93, "2019-11-20 21:55:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124719", 94, "2019-11-15 07:21:23", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136619", 95, "2019-11-16 13:00:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1141", 95, "2019-06-06 18:06:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133519", 96, "2019-11-15 19:07:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171520", 97, "2020-05-25 07:41:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168220", 98, "2020-05-20 10:22:29", "partially_refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122819", 99, "2019-11-15 05:59:35", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1143", 100, "2019-06-07 20:06:43", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164120", 101, "2020-05-13 14:55:45", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132919", 101, "2019-11-15 17:22:49", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124119", 102, "2019-11-15 06:39:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129119", 103, "2019-11-15 12:41:07", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147319", 104, "2019-11-27 18:49:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150219", 105, "2019-12-08 07:11:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1159", 106, "2019-06-16 16:06:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124019", 107, "2019-11-15 06:37:19", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144419", 108, "2019-11-22 09:54:54", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159720", 109, "2020-05-09 09:42:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1075", 109, "2019-05-25 09:51:23", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123219", 109, "2019-11-15 06:14:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1119", 110, "2019-05-28 11:22:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122319", 111, "2019-11-15 05:11:32", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138419", 112, "2019-11-17 09:27:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145119", 113, "2019-11-22 21:04:17", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140219", 114, "2019-11-18 08:51:02", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138519", 115, "2019-11-17 10:38:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1184", 116, "2019-06-21 08:47:00", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1039", 116, "2019-05-24 20:19:25", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1184", 117, "2019-06-21 08:47:00", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1039", 117, "2019-05-24 20:19:25", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172320", 118, "2020-05-26 10:46:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163720", 118, "2020-05-13 09:52:04", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1057", 119, "2019-05-25 07:43:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1146", 120, "2019-06-09 14:54:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162920", 121, "2020-05-12 19:05:45", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1090", 122, "2019-05-25 18:43:39", "refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129319", 123, "2019-11-15 13:01:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168920", 124, "2020-05-21 11:31:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1132", 125, "2019-05-31 10:38:47", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1157", 126, "2019-06-15 09:28:17", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1113", 127, "2019-05-27 11:48:41", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174520", 128, "2020-05-27 11:57:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134719", 129, "2019-11-16 01:51:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134419", 130, "2019-11-15 22:45:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134619", 130, "2019-11-15 22:51:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1078", 131, "2019-05-25 10:43:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137119", 132, "2019-11-16 17:09:35", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1115", 133, "2019-05-27 16:05:32", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135419", 134, "2019-11-16 08:35:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163920", 135, "2020-05-13 12:54:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147519", 136, "2019-11-28 20:24:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1118", 137, "2019-05-28 10:37:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162320", 138, "2020-05-11 17:06:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153719", 138, "2019-12-13 13:38:45", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162720", 139, "2020-05-12 10:47:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163020", 140, "2020-05-13 06:39:05", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1044", 140, "2019-05-25 06:04:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167920", 141, "2020-05-20 08:58:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1120", 142, "2019-05-28 12:01:25", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153919", 143, "2019-12-13 13:51:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818156619", 144, "2020-03-03 13:15:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136319", 145, "2019-11-16 12:19:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175520", 146, "2020-05-28 19:05:24", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126919", 147, "2019-11-15 08:47:27", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1114", 148, "2019-05-27 15:59:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133319", 149, "2019-11-15 18:25:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140019", 150, "2019-11-18 08:18:24", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148519", 151, "2019-12-01 13:44:14", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166620", 152, "2020-05-19 08:37:07", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134919", 153, "2019-11-16 07:45:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159620", 154, "2020-05-09 09:40:19", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1097", 155, "2019-05-26 08:23:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1096", 155, "2019-05-26 08:21:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160620", 156, "2020-05-09 17:23:47", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1087", 157, "2019-05-25 16:21:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136719", 158, "2019-11-16 13:06:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121319", 159, "2019-11-14 20:19:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005158720", 160, "2020-05-09 07:10:04", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125519", 161, "2019-11-15 08:00:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149219", 162, "2019-12-04 17:46:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1021", 163, "2019-05-24 13:59:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1032", 164, "2019-05-24 17:39:13", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1094", 165, "2019-05-25 19:26:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1059", 166, "2019-05-25 07:52:53", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131319", 167, "2019-11-15 15:11:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134819", 167, "2019-11-16 07:44:38", "refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134819", 168, "2019-11-16 07:44:38", "refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131319", 168, "2019-11-15 15:11:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155119", 169, "2019-12-18 09:24:10", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138119", 170, "2019-11-17 07:12:21", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128319", 171, "2019-11-15 10:43:19", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121119", 172, "2019-11-14 19:37:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1065", 173, "2019-05-25 08:35:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1037", 173, "2019-05-24 19:07:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1186", 174, "2019-06-21 10:53:04", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1130", 174, "2019-05-29 18:43:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145619", 174, "2019-11-23 17:31:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145619", 175, "2019-11-23 17:31:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1130", 175, "2019-05-29 18:43:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1186", 175, "2019-06-21 10:53:04", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1107", 176, "2019-05-26 18:14:08", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1098", 177, "2019-05-26 09:22:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1070", 178, "2019-05-25 09:24:30", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125219", 179, "2019-11-15 07:42:02", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1084", 180, "2019-05-25 13:10:20", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1095", 181, "2019-05-26 08:16:50", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151119", 182, "2019-12-10 17:12:35", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139319", 183, "2019-11-17 16:03:11", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152219", 184, "2019-12-12 14:47:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167720", 185, "2020-05-20 08:00:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1069", 186, "2019-05-25 09:18:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137019", 187, "2019-11-16 17:04:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1027", 187, "2019-05-24 16:40:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172620", 188, "2020-05-26 16:28:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126419", 189, "2019-11-15 08:32:47", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141819", 190, "2019-11-19 09:28:07", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151619", 190, "2019-12-11 10:02:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148419", 191, "2019-11-30 20:36:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1121", 192, "2019-05-28 12:56:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176820", 192, "2020-06-02 06:53:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1139", 192, "2019-06-05 11:50:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161820", 192, "2020-05-11 10:54:53", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1178", 192, "2019-06-20 06:40:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146619", 192, "2019-11-26 09:07:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161820", 193, "2020-05-11 10:54:53", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146619", 193, "2019-11-26 09:07:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176820", 193, "2020-06-02 06:53:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1178", 193, "2019-06-20 06:40:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1139", 193, "2019-06-05 11:50:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1121", 193, "2019-05-28 12:56:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137219", 194, "2019-11-16 17:18:30", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1085", 195, "2019-05-25 13:25:10", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149819", 196, "2019-12-05 19:17:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171220", 197, "2020-05-24 18:14:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175120", 198, "2020-05-28 15:08:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130119", 199, "2019-11-15 13:57:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129419", 200, "2019-11-15 13:06:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818156519", 201, "2020-01-22 10:30:25", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174720", 202, "2020-05-27 18:52:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120519", 203, "2019-11-14 18:18:48", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1177", 204, "2019-06-19 16:31:50", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141619", 205, "2019-11-19 09:22:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1170", 206, "2019-06-18 12:46:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142919", 207, "2019-11-20 08:30:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129219", 208, "2019-11-15 12:55:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148219", 209, "2019-11-30 14:29:21", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149919", 210, "2019-12-05 20:08:45", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1056", 211, "2019-05-25 07:27:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1089", 211, "2019-05-25 17:51:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171820", 212, "2020-05-25 14:07:06", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1019", 213, "2019-05-24 13:44:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173620", 214, "2020-05-27 07:52:55", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1147", 215, "2019-06-09 19:46:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119419", 216, "2019-11-14 14:32:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1040", 217, "2019-05-25 04:44:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154219", 218, "2019-12-13 14:32:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1051", 219, "2019-05-25 07:15:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121919", 220, "2019-11-14 22:29:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151419", 221, "2019-12-11 07:39:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120719", 222, "2019-11-14 19:08:23", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129019", 223, "2019-11-15 12:38:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150519", 224, "2019-12-08 15:42:56", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154619", 225, "2019-12-13 16:22:53", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141719", 226, "2019-11-19 09:23:28", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141019", 227, "2019-11-18 17:00:33", "partially_refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163120", 228, "2020-05-13 06:42:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133119", 229, "2019-11-15 17:39:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173320", 230, "2020-05-26 21:32:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1076", 231, "2019-05-25 10:05:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131719", 232, "2019-11-15 15:43:48", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139019", 233, "2019-11-17 14:47:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1064", 234, "2019-05-25 08:35:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1068", 235, "2019-05-25 09:04:21", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1106", 236, "2019-05-26 17:58:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1127", 237, "2019-05-28 20:33:50", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1158", 238, "2019-06-15 18:23:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144719", 239, "2019-11-22 17:01:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172220", 240, "2020-05-26 09:30:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1054", 240, "2019-05-25 07:21:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123019", 241, "2019-11-15 06:06:08", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137619", 242, "2019-11-16 20:13:00", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163420", 243, "2020-05-13 07:53:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140319", 244, "2019-11-18 09:46:44", "partially_refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152719", 245, "2019-12-13 08:21:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1175", 246, "2019-06-19 12:51:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1048", 246, "2019-05-25 06:45:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142419", 247, "2019-11-19 13:24:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132519", 248, "2019-11-15 16:47:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173820", 249, "2020-05-27 09:46:57", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1165", 250, "2019-06-17 20:18:05", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166120", 251, "2020-05-18 14:30:08", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160920", 252, "2020-05-10 10:31:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144519", 252, "2019-11-22 10:01:29", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174120", 253, "2020-05-27 10:22:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1073", 254, "2019-05-25 09:41:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142119", 255, "2019-11-19 11:32:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1050", 256, "2019-05-25 07:13:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148919", 256, "2019-12-02 20:46:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1050", 257, "2019-05-25 07:13:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148919", 257, "2019-12-02 20:46:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167520", 258, "2020-05-20 07:10:26", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160720", 258, "2020-05-09 17:45:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177220", 259, "2020-06-02 09:20:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130719", 260, "2019-11-15 14:27:33", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155719", 260, "2020-01-15 10:08:29", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155919", 260, "2020-01-15 10:18:43", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154719", 260, "2019-12-13 16:25:47", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123119", 261, "2019-11-15 06:13:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1129", 262, "2019-05-29 11:56:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126319", 263, "2019-11-15 08:31:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167420", 264, "2020-05-20 06:23:50", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123619", 264, "2019-11-15 06:28:02", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131819", 265, "2019-11-15 15:51:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137819", 266, "2019-11-16 22:04:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128019", 267, "2019-11-15 10:28:49", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148019", 268, "2019-11-30 09:44:10", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175020", 269, "2020-05-28 12:59:21", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131019", 270, "2019-11-15 14:54:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128719", 271, "2019-11-15 11:48:13", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171120", 272, "2020-05-23 18:45:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1137", 272, "2019-06-04 10:51:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132619", 272, "2019-11-15 16:49:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153219", 273, "2019-12-13 12:50:00", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005158920", 274, "2020-05-09 08:05:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1046", 274, "2019-05-25 06:08:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1134", 275, "2019-06-01 19:38:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124519", 276, "2019-11-15 06:51:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124319", 277, "2019-11-15 06:46:12", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1171", 278, "2019-06-18 15:16:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170720", 278, "2020-05-23 12:21:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162120", 278, "2020-05-11 12:31:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125819", 279, "2019-11-15 08:20:55", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163820", 280, "2020-05-13 12:01:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176020", 281, "2020-05-29 11:35:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1079", 282, "2019-05-25 10:54:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1017", 283, "2019-05-24 13:27:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129819", 284, "2019-11-15 13:23:14", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1176", 285, "2019-06-19 13:48:50", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161220", 286, "2020-05-10 16:55:21", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1026", 287, "2019-05-24 15:58:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120919", 288, "2019-11-14 19:25:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164720", 289, "2020-05-14 19:22:43", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164920", 290, "2020-05-15 13:17:47", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120219", 291, "2019-11-14 18:02:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137319", 292, "2019-11-16 18:03:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171920", 293, "2020-05-25 14:54:53", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153819", 294, "2019-12-13 13:46:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818156719", 295, "2020-03-06 09:20:22", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1131", 296, "2019-05-29 19:15:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125119", 297, "2019-11-15 07:39:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170420", 297, "2020-05-23 07:48:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170420", 298, "2020-05-23 07:48:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125119", 298, "2019-11-15 07:39:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1109", 299, "2019-05-26 19:21:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152519", 300, "2019-12-12 23:22:28", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149619", 301, "2019-12-05 15:20:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166520", 302, "2020-05-19 08:17:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166320", 302, "2020-05-19 08:13:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121219", 302, "2019-11-14 20:17:56", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166420", 302, "2020-05-19 08:15:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166320", 303, "2020-05-19 08:13:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166420", 303, "2020-05-19 08:15:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166520", 303, "2020-05-19 08:17:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121219", 303, "2019-11-14 20:17:56", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160820", 304, "2020-05-10 09:50:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173720", 305, "2020-05-27 08:45:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146119", 305, "2019-11-24 19:52:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164620", 306, "2020-05-14 12:25:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174820", 307, "2020-05-27 19:51:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161720", 307, "2020-05-11 09:08:35", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1041", 307, "2019-05-25 04:49:11", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1016", 308, "2019-05-24 13:22:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1185", 308, "2019-06-21 09:10:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152919", 308, "2019-12-13 10:04:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1016", 309, "2019-05-24 13:22:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1185", 309, "2019-06-21 09:10:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152919", 309, "2019-12-13 10:04:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138919", 310, "2019-11-17 13:34:55", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140919", 311, "2019-11-18 16:46:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170120", 312, "2020-05-22 23:03:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142519", 313, "2019-11-19 16:44:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134019", 314, "2019-11-15 19:48:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1063", 315, "2019-05-25 08:30:21", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127819", 316, "2019-11-15 10:00:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145919", 317, "2019-11-24 17:06:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135519", 318, "2019-11-16 09:28:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165320", 318, "2020-05-16 06:42:52", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123719", 319, "2019-11-15 06:28:55", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122419", 320, "2019-11-15 05:19:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168620", 321, "2020-05-20 19:16:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1102", 322, "2019-05-26 11:46:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1103", 323, "2019-05-26 11:47:11", "refunded", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152319", 324, "2019-12-12 20:08:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1136", 325, "2019-06-03 14:53:49", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142619", 326, "2019-11-19 18:04:09", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1153", 327, "2019-06-14 09:39:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1162", 327, "2019-06-17 09:24:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1153", 328, "2019-06-14 09:39:07", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1162", 328, "2019-06-17 09:24:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120819", 329, "2019-11-14 19:14:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144119", 330, "2019-11-21 15:47:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1110", 331, "2019-05-27 04:59:48", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1033", 332, "2019-05-24 17:49:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136519", 333, "2019-11-16 12:47:41", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153419", 334, "2019-12-13 13:03:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138219", 335, "2019-11-17 08:34:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1123", 336, "2019-05-28 13:38:04", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176120", 337, "2020-05-29 13:32:09", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173220", 338, "2020-05-26 21:24:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1152", 339, "2019-06-13 09:34:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132319", 340, "2019-11-15 16:35:27", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162620", 341, "2020-05-12 07:04:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146019", 342, "2019-11-24 18:57:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160220", 342, "2020-05-09 14:57:32", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139519", 343, "2019-11-17 16:26:48", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1124", 343, "2019-05-28 14:08:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137519", 343, "2019-11-16 18:50:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121419", 344, "2019-11-14 21:05:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1112", 345, "2019-05-27 09:39:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132219", 346, "2019-11-15 16:35:18", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153519", 347, "2019-12-13 13:17:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1045", 348, "2019-05-25 06:06:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128419", 349, "2019-11-15 10:49:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120419", 350, "2019-11-14 18:17:15", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166020", 351, "2020-05-18 13:52:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160320", 352, "2020-05-09 15:04:08", "partially_refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166820", 352, "2020-05-19 10:12:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175920", 353, "2020-05-29 07:41:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136019", 354, "2019-11-16 11:35:02", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126719", 355, "2019-11-15 08:41:27", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154319", 356, "2019-12-13 15:22:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130019", 357, "2019-11-15 13:51:55", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175220", 357, "2020-05-28 17:59:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1049", 358, "2019-05-25 06:46:26", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147919", 359, "2019-11-30 07:24:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129519", 360, "2019-11-15 13:08:55", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154919", 361, "2019-12-13 16:51:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136119", 362, "2019-11-16 11:35:32", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143319", 362, "2019-11-20 12:23:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131519", 363, "2019-11-15 15:32:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1066", 364, "2019-05-25 08:44:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1164", 364, "2019-06-17 19:16:04", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171320", 364, "2020-05-24 20:56:28", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144919", 365, "2019-11-22 17:23:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144819", 366, "2019-11-22 17:16:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168020", 367, "2020-05-20 09:14:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1020", 368, "2019-05-24 13:49:21", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172020", 369, "2020-05-25 15:58:17", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131619", 370, "2019-11-15 15:41:24", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1148", 370, "2019-06-10 07:35:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125619", 371, "2019-11-15 08:01:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159520", 371, "2020-05-09 09:29:14", "partially_refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134519", 372, "2019-11-15 22:47:27", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152619", 373, "2019-12-13 07:04:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127319", 374, "2019-11-15 09:18:23", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151219", 375, "2019-12-10 19:15:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151019", 375, "2019-12-10 16:32:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151219", 376, "2019-12-10 19:15:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151019", 376, "2019-12-10 16:32:01", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1160", 377, "2019-06-16 16:10:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1062", 378, "2019-05-25 08:17:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154419", 379, "2019-12-13 15:32:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172520", 380, "2020-05-26 14:59:06", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165220", 381, "2020-05-15 20:27:04", "paid", null);'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175420", 382, "2020-05-28 18:54:09", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174320", 383, "2020-05-27 10:42:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174620", 384, "2020-05-27 16:31:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1116", 385, "2019-05-28 07:11:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121019", 386, "2019-11-14 19:25:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172820", 387, "2020-05-26 17:31:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170820", 388, "2020-05-23 13:16:28", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1091", 388, "2019-05-25 19:00:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1091", 389, "2019-05-25 19:00:44", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170820", 389, "2020-05-23 13:16:28", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150719", 390, "2019-12-09 18:36:06", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126019", 391, "2019-11-15 08:22:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1072", 392, "2019-05-25 09:36:27", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136819", 393, "2019-11-16 14:36:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120119", 394, "2019-11-14 17:06:27", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1174", 395, "2019-06-19 09:28:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140419", 396, "2019-11-18 09:52:02", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127619", 397, "2019-11-15 09:42:30", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155519", 398, "2020-01-15 10:04:29", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152019", 398, "2019-12-12 08:47:24", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1173", 399, "2019-06-18 17:38:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172920", 400, "2020-05-26 18:07:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142319", 401, "2019-11-19 11:57:00", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1105", 402, "2019-05-26 13:52:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153319", 403, "2019-12-13 13:00:35", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164420", 404, "2020-05-14 09:23:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165120", 405, "2020-05-15 16:32:15", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122119", 406, "2019-11-15 05:04:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147819", 407, "2019-11-29 20:02:35", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133619", 408, "2019-11-15 19:08:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1083", 409, "2019-05-25 12:53:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119519", 410, "2019-11-14 14:55:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128119", 411, "2019-11-15 10:31:20", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134219", 412, "2019-11-15 20:59:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143019", 413, "2019-11-20 09:02:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1081", 414, "2019-05-25 11:52:24", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174020", 415, "2020-05-27 09:58:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122519", 416, "2019-11-15 05:28:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138019", 416, "2019-11-16 23:36:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138019", 417, "2019-11-16 23:36:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122519", 417, "2019-11-15 05:28:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170620", 418, "2020-05-23 08:25:48", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139219", 418, "2019-11-17 15:50:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1101", 418, "2019-05-26 10:46:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148119", 419, "2019-11-30 13:48:30", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143119", 420, "2019-11-20 10:11:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137719", 421, "2019-11-16 21:10:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131219", 422, "2019-11-15 15:02:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1067", 423, "2019-05-25 08:44:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168120", 424, "2020-05-20 09:25:44", "partially_refunded", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172420", 425, "2020-05-26 13:41:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1104", 426, "2019-05-26 12:05:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140719", 426, "2019-11-18 12:33:15", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143219", 427, "2019-11-20 12:07:32", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177620", 428, "2020-06-03 08:53:30", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1058", 429, "2019-05-25 07:50:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148319", 430, "2019-11-30 18:52:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1077", 431, "2019-05-25 10:13:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160520", 432, "2020-05-09 16:54:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129919", 432, "2019-11-15 13:47:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160520", 433, "2020-05-09 16:54:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129919", 433, "2019-11-15 13:47:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1111", 434, "2019-05-27 05:36:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1053", 435, "2019-05-25 07:20:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128819", 436, "2019-11-15 12:08:56", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1135", 437, "2019-06-03 13:54:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161620", 438, "2020-05-11 07:51:52", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177320", 439, "2020-06-02 11:03:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127519", 440, "2019-11-15 09:32:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122019", 441, "2019-11-15 04:46:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127919", 442, "2019-11-15 10:08:27", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1038", 443, "2019-05-24 19:15:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167020", 444, "2020-05-19 10:24:38", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133819", 445, "2019-11-15 19:30:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168720", 446, "2020-05-20 19:26:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818156119", 446, "2020-01-15 10:24:24", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159320", 446, "2020-05-09 08:37:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121519", 447, "2019-11-14 21:20:38", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150119", 448, "2019-12-06 16:26:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137919", 449, "2019-11-16 23:21:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153619", 450, "2019-12-13 13:35:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133419", 450, "2019-11-15 18:34:04", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1047", 451, "2019-05-25 06:22:19", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1015", 452, "2019-05-24 13:09:08", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1161", 452, "2019-06-17 07:43:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818152819", 452, "2019-12-13 09:45:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171620", 453, "2020-05-25 09:23:30", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149019", 454, "2019-12-03 06:46:38", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145019", 455, "2019-11-22 20:38:04", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176320", 456, "2020-05-29 16:57:06", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143519", 457, "2019-11-20 12:51:38", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154019", 457, "2019-12-13 14:27:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154519", 458, "2019-12-13 15:54:42", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125319", 458, "2019-11-15 07:56:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125319", 459, "2019-11-15 07:56:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818154519", 459, "2019-12-13 15:54:42", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1140", 460, "2019-06-06 06:11:05", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1023", 461, "2019-05-24 14:48:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005158520", 461, "2020-05-09 05:56:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136419", 462, "2019-11-16 12:42:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1092", 463, "2019-05-25 19:12:14", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1093", 463, "2019-05-25 19:14:55", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143919", 464, "2019-11-21 09:03:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135319", 465, "2019-11-16 08:20:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149519", 466, "2019-12-05 15:06:11", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146219", 467, "2019-11-25 09:28:56", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120619", 468, "2019-11-14 18:19:10", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133019", 469, "2019-11-15 17:38:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150419", 470, "2019-12-08 11:05:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122919", 471, "2019-11-15 06:00:38", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128519", 472, "2019-11-15 10:53:27", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130219", 473, "2019-11-15 14:03:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135619", 474, "2019-11-16 09:33:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1122", 475, "2019-05-28 13:09:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161520", 476, "2020-05-11 05:08:59", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1117", 477, "2019-05-28 07:36:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127019", 478, "2019-11-15 09:15:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1166", 479, "2019-06-17 20:45:48", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176620", 480, "2020-06-01 19:46:08", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1108", 481, "2019-05-26 18:28:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1167", 482, "2019-06-18 07:16:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151519", 482, "2019-12-11 08:47:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151519", 483, "2019-12-11 08:47:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1167", 483, "2019-06-18 07:16:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164020", 484, "2020-05-13 13:28:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127719", 485, "2019-11-15 09:58:12", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122719", 486, "2019-11-15 05:57:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160420", 486, "2020-05-09 16:37:56", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125719", 487, "2019-11-15 08:15:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124819", 488, "2019-11-15 07:23:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167820", 489, "2020-05-20 08:19:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143419", 490, "2019-11-20 12:46:36", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141319", 491, "2019-11-18 20:18:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168420", 492, "2020-05-20 17:05:32", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1138", 493, "2019-06-04 15:54:43", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161020", 494, "2020-05-10 14:41:18", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167620", 495, "2020-05-20 07:42:10", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166920", 496, "2020-05-19 10:18:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125419", 497, "2019-11-15 07:56:27", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138819", 498, "2019-11-17 11:28:45", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121719", 499, "2019-11-14 21:45:03", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818142219", 500, "2019-11-19 11:50:17", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135019", 501, "2019-11-16 07:49:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161420", 502, "2020-05-10 18:50:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818128919", 503, "2019-11-15 12:30:51", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818143619", 504, "2019-11-20 13:58:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119919", 505, "2019-11-14 16:46:23", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119819", 505, "2019-11-14 16:42:23", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133719", 506, "2019-11-15 19:15:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148719", 507, "2019-12-02 12:01:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005166220", 507, "2020-05-18 14:46:15", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176720", 508, "2020-06-02 06:52:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174220", 509, "2020-05-27 10:40:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172720", 510, "2020-05-26 16:37:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132019", 511, "2019-11-15 16:18:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127419", 512, "2019-11-15 09:24:59", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818131119", 513, "2019-11-15 14:59:06", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1082", 514, "2019-05-25 12:19:36", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127119", 515, "2019-11-15 09:15:41", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138319", 516, "2019-11-17 08:52:58", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171720", 517, "2020-05-25 11:49:04", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159220", 518, "2020-05-09 08:27:02", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162020", 519, "2020-05-11 11:40:38", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149119", 520, "2019-12-04 17:39:57", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170020", 521, "2020-05-22 22:55:44", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126619", 521, "2019-11-15 08:38:38", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153119", 522, "2019-12-13 12:24:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1180", 523, "2019-06-20 09:40:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1172", 524, "2019-06-18 16:00:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171420", 524, "2020-05-25 07:36:59", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139919", 524, "2019-11-18 07:48:07", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1172", 525, "2019-06-18 16:00:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171420", 525, "2020-05-25 07:36:59", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139919", 525, "2019-11-18 07:48:07", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164520", 526, "2020-05-14 11:22:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165520", 526, "2020-05-16 16:48:16", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1060", 527, "2019-05-25 07:57:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818133219", 528, "2019-11-15 18:07:14", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005169120", 528, "2020-05-22 06:16:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149319", 529, "2019-12-04 19:31:38", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146719", 530, "2019-11-26 17:56:03", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148819", 531, "2019-12-02 13:53:04", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005168320", 532, "2020-05-20 13:21:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005176520", 532, "2020-05-31 09:52:50", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146819", 533, "2019-11-27 07:36:47", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1035", 534, "2019-05-24 18:53:30", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818138619", 535, "2019-11-17 11:12:19", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1061", 535, "2019-05-25 08:15:28", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126219", 536, "2019-11-15 08:30:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160020", 537, "2020-05-09 10:30:32", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005172120", 537, "2020-05-25 19:56:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818122619", 538, "2019-11-15 05:37:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1125", 539, "2019-05-28 18:18:08", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818120319", 540, "2019-11-14 18:05:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119719", 541, "2019-11-14 15:23:14", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162520", 542, "2020-05-11 18:41:12", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146319", 543, "2019-11-25 11:24:58", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141419", 544, "2019-11-18 21:09:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1128", 545, "2019-05-29 07:34:31", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145219", 546, "2019-11-23 11:59:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1156", 547, "2019-06-15 08:52:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134319", 547, "2019-11-15 21:10:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1156", 548, "2019-06-15 08:52:11", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818134319", 548, "2019-11-15 21:10:39", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129719", 549, "2019-11-15 13:20:14", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123319", 550, "2019-11-15 06:19:45", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005163220", 551, "2020-05-13 07:26:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130419", 552, "2019-11-15 14:08:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1182", 553, "2019-06-20 19:29:49", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165820", 554, "2020-05-18 07:37:48", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1142", 555, "2019-06-06 20:53:54", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150819", 556, "2019-12-10 10:23:19", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818150619", 557, "2019-12-08 16:21:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818146519", 558, "2019-11-26 09:05:42", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818125919", 559, "2019-11-15 08:21:41", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818147719", 560, "2019-11-29 19:52:32", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173520", 561, "2020-05-27 07:33:38", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818126519", 562, "2019-11-15 08:37:51", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1052", 563, "2019-05-25 07:18:13", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005177420", 564, "2020-06-02 14:40:04", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139119", 565, "2019-11-17 15:02:09", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130819", 566, "2019-11-15 14:32:29", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818127219", 567, "2019-11-15 09:18:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155619", 568, "2020-01-15 10:06:10", "paid", "manual");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155319", 568, "2019-12-19 15:47:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145419", 569, "2019-11-23 16:43:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173420", 570, "2020-05-27 07:31:08", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005171020", 571, "2020-05-23 18:38:38", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818124219", 571, "2019-11-15 06:41:11", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132119", 572, "2019-11-15 16:33:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1179", 573, "2019-06-20 08:19:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145319", 573, "2019-11-23 12:31:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162420", 573, "2020-05-11 18:39:48", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148619", 573, "2019-12-01 16:08:51", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818157220", 573, "2020-04-27 06:37:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164820", 573, "2020-05-15 10:57:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170920", 573, "2020-05-23 13:33:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174920", 573, "2020-05-28 05:02:23", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141519", 573, "2019-11-18 21:23:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1025", 573, "2019-05-24 15:15:19", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167220", 573, "2020-05-19 19:33:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818157020", 573, "2020-04-10 10:10:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165720", 573, "2020-05-17 17:37:42", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153019", 573, "2019-12-13 11:04:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165720", 574, "2020-05-17 17:37:42", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145319", 574, "2019-11-23 12:31:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174920", 574, "2020-05-28 05:02:23", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818157220", 574, "2020-04-27 06:37:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818157020", 574, "2020-04-10 10:10:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005167220", 574, "2020-05-19 19:33:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1025", 574, "2019-05-24 15:15:19", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1179", 574, "2019-06-20 08:19:25", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005164820", 574, "2020-05-15 10:57:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141519", 574, "2019-11-18 21:23:54", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818148619", 574, "2019-12-01 16:08:51", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818153019", 574, "2019-12-13 11:04:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170920", 574, "2020-05-23 13:33:17", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005162420", 574, "2020-05-11 18:39:48", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818123519", 575, "2019-11-15 06:21:28", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121819", 576, "2019-11-14 21:59:29", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1151", 577, "2019-06-12 18:28:52", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1150", 577, "2019-06-12 18:27:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005174420", 578, "2020-05-27 11:30:34", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140819", 579, "2019-11-18 15:07:26", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145519", 580, "2019-11-23 17:14:09", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818145819", 581, "2019-11-24 11:10:10", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135219", 582, "2019-11-16 08:07:53", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005169220", 582, "2020-05-22 06:58:34", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1086", 583, "2019-05-25 16:13:43", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1074", 583, "2019-05-25 09:51:22", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136919", 584, "2019-11-16 16:03:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1029", 584, "2019-05-24 17:13:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136919", 585, "2019-11-16 16:03:46", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1029", 585, "2019-05-24 17:13:37", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818149419", 586, "2019-12-05 08:30:18", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132419", 587, "2019-11-15 16:36:02", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818144319", 588, "2019-11-21 18:06:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141919", 589, "2019-11-19 09:28:46", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1145", 590, "2019-06-09 10:12:00", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1088", 591, "2019-05-25 16:39:21", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818141119", 592, "2019-11-18 18:39:30", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135119", 593, "2019-11-16 08:07:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137419", 593, "2019-11-16 18:41:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135119", 594, "2019-11-16 08:07:24", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818137419", 594, "2019-11-16 18:41:47", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170320", 595, "2020-05-23 06:01:02", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005170520", 596, "2020-05-23 08:17:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818139419", 597, "2019-11-17 16:23:01", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1169", 598, "2019-06-18 12:46:43", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818140519", 599, "2019-11-18 10:19:27", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818129619", 600, "2019-11-15 13:11:26", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005161320", 600, "2020-05-10 17:34:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135919", 600, "2019-11-16 10:54:15", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818135819", 600, "2019-11-16 10:46:52", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818151319", 601, "2019-12-10 22:24:22", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1100", 602, "2019-05-26 10:30:33", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818155019", 603, "2019-12-13 16:55:35", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1031", 604, "2019-05-24 17:37:16", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818132719", 605, "2019-11-15 16:49:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818136219", 606, "2019-11-16 11:37:10", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005173020", 607, "2020-05-26 19:06:40", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1144", 608, "2019-06-08 19:57:51", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005159420", 608, "2020-05-09 09:28:31", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818130919", 609, "2019-11-15 14:38:49", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005160120", 610, "2020-05-09 10:58:12", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005165020", 611, "2020-05-15 14:47:37", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("41005175620", 612, "2020-05-28 21:32:48", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818119619", 613, "2019-11-14 15:14:40", "paid", "shopify_payments");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("B1034", 614, "2019-05-24 18:33:45", "paid", "paypal");'
    );
    db.run(
        'INSERT INTO order_head VALUES ("16818121619", 615, "2019-11-14 21:24:29", "paid", "paypal");'
    );
}
