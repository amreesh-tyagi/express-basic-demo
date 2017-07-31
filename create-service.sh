docker service create \
> --replicas 3 \
> --name my-express-service \
> --network my-skynet-network \
> --publish 5002:5000 \
> amreeshtyagi/express-basic-demo
