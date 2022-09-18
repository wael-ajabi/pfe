import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function UpdateUser({ setupdateUserModel, data, reqData }) {
  const [dataOfItemToUpdate, setdataOfItemToUpdate] = useState({
    id: "",
    cin: "",
    nom: "",
    prenom: "",
    role: "",
    tel: "",
    mail: "",
    permis: "",
    hub: "",
    matricule_veh: "",
    carte_grise: "",
    photo: "",
  });
  const [id, setid] = useState(dataOfItemToUpdate.id);
  const [cin, setcin] = useState(dataOfItemToUpdate.cin);
  const [nom, setnom] = useState(dataOfItemToUpdate.nom);
  const [prenom, setprenom] = useState(dataOfItemToUpdate.prenom);
  const [role, setrole] = useState(dataOfItemToUpdate.role);
  const [tel, settel] = useState(dataOfItemToUpdate.tel);
  const [mail, setmail] = useState(dataOfItemToUpdate.mail);
  const [permis, setpermis] = useState(dataOfItemToUpdate.permis);
  const [hub, sethub] = useState(dataOfItemToUpdate.hub);
  const [matricule_veh, setmatricule_veh] = useState(
    dataOfItemToUpdate.matricule_veh
  );
  const [carte_grise, setcarte_grise] = useState(
    dataOfItemToUpdate.carte_grise
  );

  const getDataOfUserToUpdate = () => {
    var idFromLocalStorage = localStorage.getItem("idOfUserToUpdate");
    console.log(idFromLocalStorage);
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === idFromLocalStorage) {
        setdataOfItemToUpdate(data[i]);
        setid(data[i].id);
        setcin(data[i].cin);
        setmail(data[i].mail);
        setnom(data[i].nom);
        sethub(data[i].hub);
        setrole(data[i].role);
        setpermis(data[i].permis);
        setprenom(data[i].prenom);
        setcarte_grise(data[i].carte_grise);
        setmatricule_veh(data[i].matricule_veh);
        settel(data[i].telsettel);
      }
    }
  };

  const update = () => {
    let dataUpdate = {
      id: id,
      cin: cin,
      nom: nom,
      prenom: prenom,
      role: role,
      tel: tel,
      mail: mail,
      permis: permis,
      hub: hub,
      matricule_veh: matricule_veh,
      carte_grise: carte_grise,
    };
    axios
      .put(
        `/api/gestion${reqData}/updateOne/${dataOfItemToUpdate._id}`,
        dataUpdate
      )
      .then(() => {
        window.location.reload();
        console.log(dataUpdate);
      })
      .catch((err) => console.log(err));
  };

  useLayoutEffect(() => {
    getDataOfUserToUpdate();
  }, []);

  return (
    <div className="updateModel flex">
      <div className="modelll">
        <div className="titUpdate">
          <h3 className="titleUpdate">Update Personnel</h3>
        </div>
        <div>
          <img
            id="updateImg"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRYYGBgaGhwaGhwaGBgYGBoYGhwaGhwaGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjEhISE0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQxNDQxNDE0NDQ0NDQ0MTQ/Pz80NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAQIDBAUGB//EAD0QAAEDAgIIBQIEBAUFAQAAAAEAAhEDIQQxBQYSQVFhcZEigaGx8MHREzJS4UJicoIHI5Ki8RQzssLSFv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQEAAwEBAAAAAAAAAAECETEhAxJBUWH/2gAMAwEAAhEDEQA/AGwEeylgJULNua2UNlO7KBCAZIUbG4hrGlzjAAlTH2zWB1k0maryxp8DTuycRbtn3KcnU6vIiaV0i6s+TZo/KPr1UEIIK2ZQKMdUiEtlvl0BIo0XE2n6/dPYhgjgR1+0IYQCQd/MT7qViaYMySN8Wg9ACmSrcZz7hTtC0g6o1hgyd/QxM84UB7OBPafZS9GOh7SR735JVUJx+H2HlkyQc1HkTfPkf2V/rbhdirIAAc1pFst0EeSzYHIpQVOwxbIs6d9x+0KxqUWEWN92ffay8lU4Q+LIjtbzVtXqt2Y2+5Lj5SPdUStrWsbqO8RknKrfO+75CYLoySANfF1stWtMB4FN58QFp3j7j2WMn5uS6NQscHNMFpBB6JWdVm8rq4CMhQtDY9tVjSMiOxyLTzB7iCrAtWbbvTRakFqeISSEAwWpJCfISHBNJqESchBAOwjhGEcIBKBRpus/ZaTwSDO62aS2GbDD4nWJ4Df5rESpmlcUalRziZvZQpWknGWr2jhEgSkkpkcaUpvzimgU40ICZhauyZ+vurJ9YOFmgnrae11TUo6+ytKTyGxJjlHoMk4Kr67TvS8ASHi+/wCZI67YOUed0MGPEN3mkcbLWCi19Cm+S5xbBMyIHAZHPJYWowB2X1K6JpRh/wCiZFoN5kjflC55iTfL59VMVqJGHxMTllBsSQMv1KQawd/CIGUBzZ5HNQKLw3PtAv8AYFSnVw4AXbyyHkqQZqNE5EDlf7KK8qRVkbyozr8igCKNrvnBE4IBs5Hug19qxj9h5YT4amX8r9xHWI7LoTHSAeIC5C0kLper2kDWpBzgAZixn5cFRqNMX+LRJISiiKlZshEQllJKARCCCCaTkII4QQBKo1hxOxScd8W67lblZHXXEENYyfzS4+UfdE9K+Ma4opRkIloyBGERcjCAUE4xvASe6QyOE9VaYOhkXOIG4Cxd/Tw6oA6GEebwBlx+31UlmDcb27RP+6VLqYptNuy1oDtwzPmN3nfom6WEr1syY4cOSVsh5zarcSALWnffd5I8BG2LC535d5WpwOqbjctkrT6P1RAzjmYlT+zSfjqvxNMPwwmMpgZeX3XPMZhiDMee7yXb6egGBmxfZ581nNK6k7RlptzN0prh3PXJ9gb3dgSnGFg3O7AD3W2xOqTm2I98+yzmO0S9h/LboMlU1Ki4sVxezdPmkVKE7o4WTdRhabhOMfGRgcDcJpMlhFiklqkOPLy+3JMuIFkwJhWt1MxcF7P7h6A+47rIlsKx0Ritiqx/OD0db6qbDzeV1EFEU3RfLR0TihsQUkpRSSgCQSUEEfRI0EEQ/I9FzzW7FbeII3MAaPPxE+voug4l4DSTlF+i5Rj6+297/wBTifImwVZTq/DBSSjckq2Y0cpKU1vFAP4amCZcYGccVZUXlzhs9LZqtYDMLZ6raHLoe4dJ91OtcXnPaf0NoTaIc8T1W4wGjWtAsOyLB4UNAsreizJZW9dEkh2hQG4KaxkJNJqkNCCobCJzE8Go4TR1X1cMDuVLpDQ7HtMtBnl9VqHsCh1GJVea5BrFq6WyQFi34csOS75pLAh7SN65frPog03bQFvRVnX8RvPfrGveQRaxy/ZLqAObIT72B1uPcHiFHDSDfP3+cfg1YGmP7c08wiZygjmE1WZBnil4e5hI46doattsEbgPYH3JHkp6ptWnzSF8rdh+yuQovraeElJKUURSIlBGggHCUUo0RQFRrNidig/mIHU/tK5qVr9eMVZrBxk/T2H+pY9XmfGWr9EUmUoolSQATjfVJCm6Pw224ItVJ2rfV7RBqPEiwu4/RdKwlANAA3Ko0JhQxgaPPmVoqDFhq9dWc8iXRap9FqjUWqZSCBUmmFIamWBOtQk61KlNtKWmmicmHhOuKaekcQ6rVQ6bwLXscCNy0Twq7GNsho4XpPC/hvc3gZHRMiHt+T/zb04rTa7YTYcHgWyWVwzodsz+bLru+blrm9jl3OU09u0DxH139/dMsdskHgpdUAGRkbxyPLdcFRXtVJdG1WaPwz1lXQWe1SePwGHjI5yCVoQLLO+t54SURSiEkpEKEEaCAWiJSk1WdDSeAJ7JhzfWeuX1id146TA9GhU8qRpN5LzO6B6BRVpGNGUaSjQRYCv9X2iyomhWuinPA8DZJO/IKavPro2jXTC0NALmLMDjXXBJ5B0emSkjEaQoC7H7I3gbXeCQfMKON/2/46nSCm0wuY6M11qAw9od5Q75ZazR2tFF+btk8HW9880rnhzUrVMTig4bFNfkQVJa9IcPApQKZL0h9cDeguJBTbwqrHawUaQl72jzWUx/+IQMihTJ/mdAHuqk6VvG8c1V+NAhc7GmMXijs02veT+glrB1dYBSsNq7j2Hb/Ea0/p2nG3MnPzlKw5qhrdhduk4b4J81ytr+4uPnX3XXMaXuYW1AA9ucZGRmFyBw2XOHAkdjCvCPy/yp1Z834+Lv+YeqbrU4hwFt/IpNMyBwy9lMwdQRByy8slTJfak4jxOYcp2h1gg/RbJc70ZX/BqgZSbFdBo1A5ocN6nXrTN+FlIKWUkqTFCCCCAdKjYx3hI4275+kp8qNjNw5/QphzDS9OKr/wCo+5H2UBaDWehsv2uM+mz9z2VAQtJ4y1PpdIXRvam2GCFLrMgA8UhDTCtJoMbLAVmqYvC3OgcFtMaOQ9VOl4n1KGsLKcWnok//AL5osGdzHsCqHWTQD6b9pt2OPY71ZaG1epVaDwC01S07BNodGcG+dpFkpJVa1qJlTTWFxLSXsDSBJcHMDm84Jkx0KgHRwJLqLw8DMHwvHIg/sVHw2rOJaXsY1+y8Q9n4ckm4A2iC1uZ8QNrwVb43Vw4RjHsftlrf8wTcHMim6Ljdsmx5J8/wS2+w7q/iqrHxLoyNz6grpWExG0AVzxjCWsqtu0zeIuCQWuBuCCCIO8LZ6BqbTQs61ni5qOssXrTiqziGU55xlvzW1xLYaVjNKtfsueBAAkk2AHGUd4J9ZR+iCPFXeGicj4j2yHQJeGxeCp+KGugxNRwF7TFMdf08UhmjRXeA+pssO/aG0718LeSrquqdak8hhddr2OIY54cx0g7BaCIcwjmDKuffWery/I0dP/EJjfCxjImAA7ZhoJBzaAJi194Vjg9dWVTskbLjlMX6EWPkqChqhSZhSKlsQ6XNa0y9gNmtdB4AE3iSkavaoP8AxQX3aLm9g7cP5uKWpIebqtbUO2C47wuPaVpbNd4/nd7ruNbC7DYXHNO0P8+of53e6MU/y5+RVbMDt3unKb4MbkeNGyQ3gAT5gfPNNTIB4W+3zotI576k1ahJDsvuMit5qxjNunfMWI4EftHZc+B8PmtRqzW2Kg/S8A8rj/lTpWW0KSUopJUrFCCNBMDKj18pT5Kj4l0A/L7kBiNanfk4wfdZmFeaxvl/P9hl6qmY1aTxlr02FYsh7PP1/dV6fwVUNJByI9dyKM3hVGn4wDxXTtWWjZHQBc5e3xt57J3ZPEjLkQfNdC1bqeEKNNvx+tLiMC17YcJBCrGaGDMmgjotJhrhTmUQdyzaWM9hMK4WDbRGat2UXngPWFYtw4CW5lkyZ7SeGGxsAAXkwIvvKc0CyDCkY9qRoceIpVXPi9xTZbHJRBhpbEDzEjsp2IFh0SKKEzxmMXoh0+FrY5CPZMUtHOBuw79538j8utoWAojQRwft/rL09HExDNnd8HG5VrhsGGDJWRYAmqyKcvVVj2+Erlr9HB5fUdk5znQeE/uF0vT9fYovP8p7mw9Sub60YxtOgWNPiqHYHHZF3Hpu80Zn0ask+sVjage9zhlu5gWCjNefnBKrNggImCZW7lvpc281otAOkNH6THleFnm5QrbV2rD46H7qaefXRqTpaCd4v13oykYQyxvn7pxS0EglQggElQMa+45Se1vup7lUaakMcRw2f9WfugMVpQbbnOG4T5SPv6KtAhvP/lXbWeGqf5Y+v2VI82I6LSMtGEEqkL90HCwQSQ/ENbswJENM5EHM9VutB1wPNc5cFrtBV5Y08vUW+inU+NPx366jo7ESAr3DuWL0RiZharCVFk6fVs1B4SGOS3ZJo4ptIOTWivzJvSNSXuHCB87qToht0qv+L6tkOiYYn3iw6KMTHdFZzxKCXtJppRkp9HAeVErvTr3KBiqsApWrzGO1/wBM/gUmkXJe0ATFxLs/7VybSGPfXftvNzu3AcAtT/iRjNt7GDdtOPUwB9Vi2rTE+dYfl13XD+JftOkcPnugxtkhydp5K2cGykSCRuv5SB9U/gnbLtobiOxUvRLAX7Lv4mkek+t1DewscRzIPkf2SPn9dL0VU2qbTyJ+v1UtUOq1aWdQD5ix9gr6VDQaCJBAEQqnS4mke/1Vw5VmlaZLD84ogZ3D4b/Lfzn2WUxLYeR09QCtxhWeCOZnsT9lkMcyXnt2FleWeoi0RZx5R3SKuY6D7/VLcbQN5SKrpJKaTRV9q1Vs5nAyPP8A4VC5StGYnYqB242KVPN5XSNHPLYWv0biJWKwL5AIV9o7ERZZ10ytnRepAeqjDVrKUK6k6zOszqlN7nMYXh17EC4AESeij6vaeeZD2FhGbXWI5g/xBayowPFxKjnQ7HNJLQg5/wBJxGnw1vgY97zkxsbR7mAOZICPRGKr1T46YYAZPiD+gkACVL0XgGMBhoVqxoAsl6VsnkAiyac5Ovco7ymmGaz1TaUrQIVnXdZYzXHSYo0Xv/iPhbzJRztX3kcw1jxX4mIe4GQDA8lVsKDnEyTfeeqILaOS3t6XKcpBNxdScG2SQiiL6rhi2mx4zbHoQfnVQ9Lhpqktyc1rh/c1XmAh9DZ4NLT/AFAhZ+u07V+EDoLfdKLvjQ6nVIc5n8u0O5BHeO61KxurNq7Y4FvpP0WzKVOeAgjQSMoqJjGSwjkphTNVkggoChY4t255n3+eSxVR8vJ4/Va7Tb9hrv1RB87SFinO8RVRno1Us7okI6pulFtp6KkmSgjqCCihAarVjSs/5bz4hlzC2GHfvXKKby1wc2xBBBXQdD4/bEHMfJUajbGuzja4GrIVdpjTFbDv/JtsIs4OyPBwPoQlYOtCexrdtsFZ2Ns2f1SM1uruMBhaOQv3JPonqetDmukue3jtBwB72KrX0n0XktnZ3jO3TeFe4HGte0A02nO4Ai4z8rKNdd/4s5ufhb9ayb7bo3ANP/qLp/B641CY/De8c2OafZO0ajYgUmW3mN3XerLCeK4AaDnAieiU6X5M4k+yF4bSWIrfkoljN7nuA8mtAknrAurFrjvS2OsmcTVDQr+uG878iNjqwAJK4prjpv8A6mrDDNNhIbwcd7um4futF/iBrMYOHpuubVCNwP8AAOZ38uq564WPX6fstM5/rH8m/wCQQdY9PqEQRNyPRG1aMTjRKnYNvjtwMdj9lCo59VYYduyQ7gQfnmgLjROJDBVn9II5nL7KPQo7QLnfw0572HuSmmtaHgOym/O0gK+w+Fig6Rd7mg8gC0D6qa0z9R9X6ey9k5z7tstgqLRVAl4O4OP+1gHuVfEKeq4JBHCCCKTdROJqtkg2Q1orwAzfJM8uHf2WQJutHrBU26xG4eH/AE3Pusy8XVzxnr0h2fRTa9OGjqPZRabd/Ep6rVnuqSiuMkp5jIB+X+e6Rhqe07kLnoM1LqsyaLTc/PmSQQ2ZjqPdaLDuLSHNMEKhw4l46rQ0mKavLU6J0gHjgRmOB+y0GHMrn9MuYQ9tiOxHArS6K0sHcjvBzHziorbNad+jmvF4TTNWdr8ro7fVS8BimuCuMO9Jc1Z4p8PqqGmS8n5yVtSwTWDepgqBN1qgRyC61fTLzCzGntIG7WG8XPBStKaTvsMu7edwVLjcNsU3HebknMpBynSsms8uzJn0z9FGZk7yVzp/CODmP/hLL8iCB/7BVFIXPMfutZ45dz6ZbvQanXMTRF1STtPf0Vm14LOc+9wqpqm4cTbl7IC2IBNN+4hpP9tj6LVYoQ1o5lx6C0d3BZTAeKjzY/8A2u+OWn0UfxS0wS0NbM8cz6x2U1pmrTAU4Atu9zJUqEKQtPMoypUCCCCAJR8STu+fPopJCjYnInkgMLXol7aj9zRu4vcbD07rPYk+J3btZalg2cK/m6ezx/8AKylRXGehizQkOKW8ZdJPU/AmyqQewLTJjf6xeO8dlLxtPYZLj43egScNU/BEltyLKOS6q+XfsApUcwFL+Lsr3DFQ6bIEKTRN1NaScWApyEh1MgyLHiFJwwkKQ7DypXwMBpt9Mw8SOI+y0mG1uYBc+/2WWdhUdPBE7klS1rjrazcCegP2TVTSVetZo2G8d/ZQNGaNM3C1OFwoAyStVEPAaP2bnP6oaaYPwz0VvswqrTAlh6JBg8dhfxqJZkbQeBBlYupTLHkEQQTK35YQVV6V0YKgkWcMj9+S0zrjLeO/Wew2G2zHGPdRsThy0kcCR2V1oXDOa8teI2YJ5icweGXdTdP4AASN/o4ZHzFj0Vd+sv1+MiFMpNIAIyJhLbhyMx85c1Lw+FDiAIjfu7qulwWh6v52H+IEeYuPqtnqrU2qAjOSD1BssxUwApPgmTG00jI8B7q01de6i0tdkXdjAU08/K17WxZGUGOBEoFS0BBDaQQCSo2OHgPy039FJc5VmltJ06TYe7P+EXJ8kQVl9KHYw4bvyd5+Ie47LJvN1ZaU0i6qeDRkOMWBPOFWgXWkZWgfsgx0FLqRKXTpIIUkmXX+3BWeFw2ztdSO1lE/CV3hKe02eZ9ypqsz6bZTS2MUoUU/QwklS14k4CmrihQTWCw8K1o01FrSQyzAA7lNw+jgNymYempzGJdMzh8MBuUsNhKY1KISMw4KDjqUtKtNhMVWWTJjXYW6MYOdyvHYa6W3Cphksdo6AXAboP8ATIJ9QD/ahTw4ewsdcgecHI+S1eIwgIWbcwsdP6RHZxA9CFWb34y38vWZxOjHAGBJaYPLgRyKhNeQbiCuh1cG17Q9ouRBHEcOoKocTocPPhMXiCMjwVSps/xW0dl7fF+Zlj04hW+BpbTDOcz1ix+qon4d9Cpsu4QYyIzWp0c0GmBwVJP4Ylpg3nL6hS5lI2JHP2KAfv371NVCkE3thBICfkub6b/7z+v0CCCcK+KpyJuaJBWzBv5h1UoI0Egfpq40d+QdXf8AkUEEqrHqeFNoIIKG0W2GVlRRoKK0T6CmNQQQD7MkSCCAUmqiCCAguzS2oIIBussvpD81T+pv/iEEFWfWf5PFlon8nmmqn/df/S36oIKv6X8ZrWX87PP3CtdFZO6j2RoKkLKmmXb0EEgrkEEEE//Z"
          />
          <div className="parentBtnn">
            <button className="updateBtn" id="ajouter">
              Importer une photo
            </button>
            <button
              onClick={() => {
                //   setshowAddModel(false);
              }}
              className="updateBtn"
            >
              Supprimer
            </button>
          </div>
        </div>
        <div className="parent">
          <div>
            <label className="labelUpdate">Personne ID</label>
            <input
              defaultValue={dataOfItemToUpdate.id}
              className="inputAdd"
              type="text"
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Nom du Personnel</label>
            <input
              defaultValue={dataOfItemToUpdate.nom}
              className="inputAdd"
              type="text"
              onChange={(e) => setnom(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Prénom du Personnel</label>
            <input
              defaultValue={dataOfItemToUpdate.prenom}
              className="inputAdd"
              type="text"
              onChange={(e) => setprenom(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Numéro CIN</label>
            <input
              defaultValue={dataOfItemToUpdate.cin}
              className="inputAdd"
              type="text"
              onChange={(e) => setcin(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Numéro du téléphone</label>
            <input
              defaultValue={dataOfItemToUpdate.tel}
              className="inputAdd"
              type="text"
              onChange={(e) => settel(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Adresse E-mail</label>
            <input
              defaultValue={dataOfItemToUpdate.mail}
              className="inputAdd"
              type="text"
              onChange={(e) => setmail(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Role Personnel</label>
            <select
              className="inputAdd"
              name="cars"
              id="cars"
              onChange={(e) => setrole(e.target.value)}
            >
              <option value="ChoisirRole">Choisir Role</option>
              <option value="Gérant">Gérant</option>
              <option value="livreur">livreur</option>
              <option value="Commercial">Commercial</option>
              <option value="Magasiné">Magasiné</option>
            </select>
          </div>
          <div>
            <label type="text" className="labelUpdate">
              Permis
            </label>
            <input
              defaultValue={dataOfItemToUpdate.permis}
              className="inputAdd"
              type="text"
              onChange={(e) => setpermis(e.target.value)}
            />
          </div>
          <div>
            <label type="text" className="labelUpdate">
              Matricule Vehicule
            </label>
            <input
              defaultValue={dataOfItemToUpdate.matricule_veh}
              className="inputAdd"
              type="text"
              onChange={(e) => setmatricule_veh(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Carte Grise</label>
            <input
              defaultValue={dataOfItemToUpdate.carte_grise}
              className="inputAdd"
              type="text"
              onChange={(e) => setcarte_grise(e.target.value)}
            />
          </div>
          <div>
            <label className="labelUpdate">Hub</label>
            <select
              className="inputAdd"
              name="cars"
              id="cars"
              onChange={(e) => sethub(e.target.value)}
            >
              <option value="ChoisirRole">Choisir Hub</option>
              <option value="Gérant">Gérant</option>
              <option value="livreur">livreur</option>
              <option value="Commercial">Commercial</option>
              <option value="Magasiné">Magasiné</option>
            </select>
          </div>
        </div>
        <div className="parentUBtn">
          <button
            onClick={() => {
              setupdateUserModel(false);
            }}
            className="updateBtn"
            id="annuler"
          >
            Annuler
          </button>
          <button className="AddBtn" id="update" onClick={update}>
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
