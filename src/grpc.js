

    app.post("/queryDataWithApiKey", (req, res) => {
    const { serving_endpoint, customer_id, corpus_id, api_key, message } = req.body;
    const query_data = generateQueryData(message, customer_id, corpus_id);
    try {
      let queryService = new vectara.QueryService(
        `${serving_endpoint}:443`,
        getCredentials(api_key, customer_id, corpus_id, true)
      );
  
      queryService.Query(query_data, function (result, status) {
        res.send(status);
      });
    } catch (err) {
      console.log(err);
      res.send(JSON.stringify(err));
    }
    });

    function generateQueryData(query, customer_id, corpus_id) {
    return {
      query: [
        {
          query: query,
          num_results: 10,
          corpus_key: [
            {
              customer_id: customer_id,
              corpus_id: corpus_id,
            },
          ],
        },
      ],
    };
  }
  
  function getCredentials(token, customer_id, corpus_id, is_api_key = false) {
    return grpc.credentials.combineCallCredentials(
      grpc.credentials.createSsl(),
      grpc.credentials.createFromMetadataGenerator(function (_, callback) {
        let md = new grpc.Metadata();
        if (is_api_key) {
          md.set("x-api-key", token);
        } else {
          md.set("Authorization", `Bearer ${token}`);
        }
        md.set("customer-id", customer_id.toString());
        if (corpus_id !== null) {
          md.set("corpus-id", corpus_id.toString());
        }
        return callback(null, md);
      })
    );
  }