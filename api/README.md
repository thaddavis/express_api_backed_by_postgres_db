kubectl apply -f express_to_connect/namespace.yaml

kubectl apply -f express_to_connect/deployment.yaml

kubectl apply -f express_to_connect/service.yaml

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

docker build -t thaddavis/nodejs:v5 .

docker push thaddavis/nodejs:v5

kubectl port-forward service/example-service -n api 7000:3000

kubectl port-forward service/postgres -n db 7000:6000