import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String PROTOCOL = "http";
  String DOMAIN = "192.168.0.5:5000";

  Future<List<dynamic>> fetchUsers() async {
    var url = "$PROTOCOL://$DOMAIN/posts";
    var result = await http.get(url);
    print(result);
    print('hey');
    return json.decode(result.body);
  }

  @override
  Widget build(BuildContext context) {
    fetchUsers();
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        child: FutureBuilder<List<dynamic>>(
          future: fetchUsers(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if (snapshot.hasData) {
              return ListView.builder(
                itemBuilder: (BuildContext context, int index) {
                  return Text(snapshot.data[index]['description']);
                },
                itemCount: snapshot.data.length,
              );
            } else
              return Container();
          },
        ),
      ),
    );
  }
}
