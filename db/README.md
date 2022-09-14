# Reference commands

kubectl apply -f attempt5/namespace.yaml

kubectl apply -f attempt5/postgres-config.yaml

kubectl get configmap

kubectl apply -f attempt5/postgres-pv.yaml
kubectl apply -f attempt5/postgres-pvc.yaml

kubectl get pvc

kubectl apply -f attempt5/postgres-deployment.yaml

kubectl get deployments

kubectl apply -f attempt5/postgres-service.yaml

kubectl get all -n db

kubectl exec -it postgres-5d46b88759-682f4 -- psql -h localhost -U admin --password -p 5432 postgresdb
kubectl exec -it postgres-5d46b88759-vr7lt -- psql -h localhost -U admin --password -p 5432 postgresdb

CREATE TABLE COMPANY(ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, AGE INT NOT NULL, ADDRESS CHAR(50), SALARY REAL);

INSERT INTO company(name, age, address, salary) VALUES ('Tad', 32, 'Miami', 5000000);