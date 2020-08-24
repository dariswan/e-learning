var dataObject={"nim":"125050400111044", "nama": "Isyana Sarasvati","jurusan": "Teknik Informatika", "fakultas": "Filkom","alamat": "Jl. Suka Nyanyi", "noHP": "081234567890"};
				
var Application = {
	initApplication : function(){
		/*$(window).load('pageinit', '#page-one', function(){
			Application.initShowMhs();
		})*/
		$(document).on('click', '#loggr', function(){
			Application.login();
		})
		$(document).on('click', '#buatP', function(){
			Application.insertP();
		})
		$(document).on('click', '#hapusP', function(){
			Application.deleteP();
		})
		$(window).load('pageinit', '#pengumumang', function(){
			Application.showP();
		})
		$(document).on('click', '#MasukN', function(){
			Application.insertN();
		})
		$(document).on('click', '#editN', function(){
			Application.updateN();
		})
	},
	
	//======================================LOGIN============================================
	
	login : function(){
		var nip = document.getElementById('nip').value;
		var password = document.getElementById('password').value;
		if(nip!="" || password!=""){
			console.log(nip);
			console.log(password);
		$.ajax({
			url : 'http://playon-id.com/ppk/show.php',
			type : 'post',
			
			data:{
					"nip":nip,
					"password":password
				},
			beforeSend : function(){
				$.mobile.loading('show', {
					text : 'Plese wait while retrieving data...',
					textVisible : true
				});
	},
	success : function(data){
		if(data.card!=null){
			location.href = "index.html#menug";
			document.getElementById('nip').value="";
			document.getElementById('password').value="";
		}
		else{
			alert("NIP atau Password salah!!");
			location.href = "index.html#logguru";
			document.getElementById('password').value="";
		}
		
   },
	complete : function(){
		$.mobile.loading('hide');
	}
		});
		}
		else
		 {
		  alert("Silahkan Masukkan NIP dan Password");
		 }
			
	
	},
	
	//=============================================================================
	
	//====================================CREATE PENGUMUMAN========================
	
	insertP : function(){
		console.log("test Insert");
		
		var nama_kelas = document.getElementById("select-choice-mini");
		var selectedclass = nama_kelas.options[nama_kelas.selectedIndex].value;
		var pengumuman = document.getElementById("pengumuman").value;
		if(pengumuman!=""){
		console.log(selectedclass);
		console.log(pengumuman);
		$.ajax({
			url : 'http://playon-id.com/ppk/add.php',
			type : 'post',
			
			data:{
					"nama_kelas":selectedclass,
					"pengumuman":pengumuman
				},
			beforeSend : function(){
				$.mobile.loading('show', {
					text : 'Plese wait while retrieving data...',
					textVisible : true
				});
	},
	success : function(dataObject){
			alert("Berhasil ditambah");
			document.getElementById("pengumuman").value="";
			console.log("Added");
			location.href = "index.html#pengumumang";
			location.reload();
			
   },
	complete : function(){
		$.mobile.loading('hide');
	}
		});
	}else{alert("Pengumuman tidak boleh kosong");}
	},
	
	//=============================DELETE PENGUMUMAN==============================
	
	deleteP : function(){
		console.log("test Delete");
		var id_pengumuman = document.getElementById("id_pengumuman").value;
		if(id_pengumuman!=""){
		console.log(id_pengumuman);
		$.ajax({
			url : 'http://playon-id.com/ppk/delete.php',
			type : 'post',
			
			data:{
					"id_pengumuman":id_pengumuman
				},
			beforeSend : function(){
				$.mobile.loading('show', {
					text : 'Plese wait while retrieving data...',
					textVisible : true
				});
	},
	success : function(data){
		alert("Berhasil dihapus");
			document.getElementById("id_pengumuman").value="";
			console.log("deleted");
			location.href = "index.html#pengumumang";
			location.reload();
			
   },
	complete : function(){
		$.mobile.loading('hide');
	}
		});
		}
		else{alert("ID Pengumuman tidak boleh kosong");}
	},
	
	
	//=====================================================================================
	
	//=============================LIHAT PENGUMUMAN==============================
	
	showP : function(){
		$.ajax({
			url : 'http://playon-id.com/ppk/read.php',
			type : 'post',
			
			data:{
					
				},
			beforeSend : function(){
				$.mobile.loading('show', {
					text : 'Plese wait while retrieving data...',
					textVisible : true
				});
	},
	success : function(data){
				var list = data;
                var tr = "";
                    tr += "<tr>";
                    tr += "<td>" + list[0,0].id_pengumuman + "</td>";
                    tr += "<td>" + list[0,0].pengumuman + "</td>";
					tr += "</tr>";
                    tr += "<tr>";
                    tr += "<td>" + list[0,1].id_pengumuman + "</td>";
                    tr += "<td>" + list[0,1].pengumuman + "</td>";
					tr += "</tr>";
					tr += "<tr>";
                    tr += "<td>" + list[0,2].id_pengumuman + "</td>";
                    tr += "<td>" + list[0,2].pengumuman + "</td>";
					tr += "</tr>";
                    tr += "<tr>";
                    tr += "<td>" + list[0,3].id_pengumuman + "</td>";
                    tr += "<td>" + list[0,3].pengumuman + "</td>";
					tr += "</tr>";
					tr += "<tr>";
                    tr += "<td>" + list[0,4].id_pengumuman + "</td>";
                    tr += "<td>" + list[0,4].pengumuman + "</td>";
					tr += "</tr>";

					tr += "</tr>";
                $("#table_s tbody").append(tr);
			
   },
	complete : function(){
		$.mobile.loading('hide');
	}
		});
		
	},
	
	//====================================CREATE Nilai========================
	
	insertN : function(){
		console.log("test Input Nilai");
		var nis = document.getElementById("nis").value;
		var  mp = document.getElementById("mp");
		var slmp = mp.options[mp.selectedIndex].value;
		var  bulan= document.getElementById("bulan");
		var slbulan = bulan.options[bulan.selectedIndex].value;
		var  minggu= document.getElementById("minggu");
		var slminggu = minggu.options[minggu.selectedIndex].value;
		var nilai = document.getElementById("nilai").value;
		console.log(nis);
		console.log(slmp);
		console.log(slbulan);
		console.log(slminggu);
		console.log(nilai);
		if(nis!=""){
		$.ajax({
			url : 'http://playon-id.com/ppk/addnilai.php',
			type : 'post',
			
			data:{
					"nis":nis,
					"mp":slmp,
					"bulan":slbulan,
					"minggu":slminggu,
					"nilai":nilai
			
				},
			beforeSend : function(){
				$.mobile.loading('show', {
					text : 'Plese wait while retrieving data...',
					textVisible : true
				});
	},
	success : function(dataObject){
			alert("Berhasil ditambah");
			document.getElementById("nis").value="";
			document.getElementById("nilai").value="";
			console.log("Added");
			location.href = "index.html#nilaig";
			location.reload();
			
   },
	complete : function(){
		$.mobile.loading('hide');
	}
		});
	}else{alert("NIS tidak boleh kosong");}
	},
	
	
	//=====================================================================================
	
	//====================================UPDATE Nilai========================
	
	updateN : function(){
		console.log("test Edit Nilai");
		var nis = document.getElementById("nis").value;
		var  mp = document.getElementById("mp");
		var slmp = mp.options[mp.selectedIndex].value;
		var  bulan= document.getElementById("bulan");
		var slbulan = bulan.options[bulan.selectedIndex].value;
		var  minggu= document.getElementById("minggu");
		var slminggu = minggu.options[minggu.selectedIndex].value;
		var nilai = document.getElementById("nilai").value;
		console.log(nis);
		console.log(slmp);
		console.log(slbulan);
		console.log(slminggu);
		console.log(nilai);
		if(nis!=""){
		$.ajax({
			url : 'http://playon-id.com/ppk/edit.php',
			type : 'post',
			
			data:{
					"nis":nis,
					"mp":slmp,
					"bulan":slbulan,
					"minggu":slminggu,
					"nilai":nilai
			
				},
			beforeSend : function(){
				$.mobile.loading('show', {
					text : 'Plese wait while retrieving data...',
					textVisible : true
				});
	},
	success : function(dataObject){
			alert("Berhasil diubah");
			document.getElementById("nis").value="";
			document.getElementById("nilai").value="";
			console.log("Edited");
			location.href = "index.html#nilaig";
			location.reload();
			
   },
	complete : function(){
		$.mobile.loading('hide');
	}
		});
	}else{alert("NIS tidak boleh kosong");}
	},
	
	
	//=====================================================================================
	
	
};